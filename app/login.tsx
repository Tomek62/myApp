import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { ThemedText } from "@/components/ThemedText";
import { Input } from "@/components/Input";
import { FormContainer } from "@/components/FormContainer";
import  BlurBackground  from "@/components/ui/BlurBackground";

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }

    try {
      await login(email, password);
      router.push("/(tabs)");
    } catch (error: any) {
      Alert.alert("Erreur", error.message || "Une erreur s'est produite.");
    }
  };

  return (
    <View style={styles.container}>
      <BlurBackground style={{ top: -50, left: 0 }} />
      <BlurBackground style={{ top: 200, left: 0 }} />
      <ThemedText type="title" style={{marginBottom:60}}>ETIKET'</ThemedText>
      <FormContainer subTitle="Connexion">

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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se Connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => router.push("/signup")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 100,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
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
  input: {
    // width: '80%',
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
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
  signupButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#FFB74D",
  },
  signupButtonText: {
    fontSize: 18,
    color: "#FFB74D",
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
  formContainer: { 
    width: "100%", 
    alignItems: "center" ,
    backgroundColor:"#FFFFFF",
    padding: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position:"relative"
  },
  subTitle:{
    fontFamily:"FredokaSemiBold",
    fontSize:24,
    marginBottom:20,

  }
});
