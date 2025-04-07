import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { Input } from "@/components/Input";
import { FormContainer } from "@/components/FormContainer";
import { Image } from "react-native";
import BlurBackground from "@/components/ui/BlurBackground";

export default function SignupScreen() {
  const { signup } = useAuth(); // Utilisation de useAuth pour récupérer signup
  const router = useRouter();

  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Pour gérer l'état de chargement

  const handleSignup = async () => {
    if (!pseudo || !email || !password) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }

    try {
      setLoading(true);
      await signup(pseudo, email, password);
      Alert.alert("Succès", "Compte créé avec succès !");
      router.push("/login"); // Redirige l'utilisateur vers la page de connexion après inscription
    } catch (error: any) {
      Alert.alert("Erreur", error.message || "Une erreur s'est produite.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
            <BlurBackground style={{ top: -50, left: 0 }} />
            <BlurBackground style={{ top: 200, left: 0 }} />
      <ThemedText type="title" style={{ marginBottom: 60 }}>
        ETIKET'
      </ThemedText>
      <FormContainer subTitle="Inscription">
        <Input
          label="Pseudo"
          value={pseudo}
          isPassword={false}
          onChangeText={setPseudo}
          placeholder="azerty"
        />
        <Input
          label="Email"
          value={email}
          isPassword={false}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="azerty@mail.com"
        />
        <Input
          label="Mot de passe"
          value={password}
          isPassword={true}
          placeholder="my-password"
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.link}>Pas encore de compte ? S'inscrire</Text>
        </TouchableOpacity>
      </FormContainer>
      <Image
        source={require("@/assets/images/beer-person-logo.png")}
        style={styles.logo}
      />
    </View>
  );
}

// **Styles**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingTop: 100,
    paddingHorizontal: 20,
    position: "relative",
  },
  logo: {
    width: 100,
    height: 150,
    marginBottom: 20,
    transform: [{ rotate: "180deg" }],
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    letterSpacing: 3,
    marginBottom: 20,
    fontFamily: "FredokaBold",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFB74D",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  link: {
    fontSize: 14,
    color: "#000000",
    marginTop: 5,
    marginLeft: 10,
    textDecorationLine: "underline",
    fontFamily: "FredokaRegular",
    textAlign: "left",
  },
});
