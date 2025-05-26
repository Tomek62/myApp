import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (pseudo: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  // Charger le token stocké au démarrage de l'application
  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        setIsAuthenticated(true);
      }
    };
    loadToken();
  }, []);

  // **Fonction Signup**
  const signup = async (pseudo: string, email: string, password: string) => {
    try {
      console.log("Envoi de la requête :", { pseudo, email, password });
      const response = await axios.post(
        `http://172.20.10.2:5000/auth/register`,
        {
          pseudo,
          email,
          password,
        }
      );

      // Auto-login après l'inscription
      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
      setToken(response.data.token);
      setIsAuthenticated(true);
      console.log("Réponse de l'API:", response.data);
    } catch (error: any) {
      if (error.response) {
        console.error("Erreur API :", error.response.data);
        // Alert.alert('Erreur', `API: ${error.response.data.error}`);
      } else if (error.request) {
        console.error("Aucune réponse reçue :", error.request);
        // Alert.alert('Erreur', "Aucune réponse reçue du serveur");
      } else {
        console.error("Erreur Axios :", error.message);
        // Alert.alert('Erreur', error.message);
      }
      throw new Error(error.response?.data.error || "Erreur d'inscription");
    }
  };

  // **Fonction Login**
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("http://172.20.10.2:5000/auth/login", {
        email,
        password,
      });

      // Stockage du token
      await AsyncStorage.setItem("token", response.data.token);
      console.log("Token reçu :", response.data.token);
      console.log("User reçu :", response.data.user);

      await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
      setToken(response.data.token);
      setIsAuthenticated(true);
    } catch (error: any) {
      throw new Error(error.response?.data.error || "Erreur de connexion");
    }
  };

  // **Fonction Logout**
  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// **Hook personnalisé pour utiliser le contexte Auth**
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
