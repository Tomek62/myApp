import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { Svg, Path } from "react-native-svg";
import { ThemedText } from "@/components/ThemedText";
import BlurBackground from "@/components/ui/BlurBackground";
export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Svg
        width="60"
        height="399"
        fill="none"
        viewBox="0 0 79 399"
        style={{ position: "absolute", top: 150, left: 0 }}
      >
        <Path
          fill="#FFCF82"
          d="M-38.78 2.598-189.18 73.132c-9.589 4.496-14.329 15.43-11.056 25.502l92.69 285.271c3.399 10.461 14.294 16.527 24.977 13.906l145.148-35.614c11.47-2.814 18.365-14.532 15.254-25.927L-9.605 16.08C-13.039 3.504-26.978-2.937-38.779 2.597"
        ></Path>
      </Svg>
      <Svg
        width="240"
        height="400"
        fill="none"
        viewBox="0 0 260 468"
        style={{ position: "absolute", top: 70 }}
      >
        <Path
          fill="#FFCF82"
          d="M229.609.866 23.781 26.594C10.659 28.234.811 39.39.811 52.614v374.543c0 13.735 10.598 25.142 24.296 26.152l186.114 13.713c14.708 1.084 27.417-10.172 28.119-24.904l19.714-413.985c.774-16.257-13.295-29.286-29.445-27.267"
        ></Path>
      </Svg>
      <Svg
        width="68"
        height="385"
        fill="none"
        viewBox="0 0 68 385"
        style={{ position: "absolute", top: 150, right: 0 }}
      >
        <Path
          fill="#FFCF82"
          d="M281.744 32.566 118.608 1.225C108.207-.773 97.946 5.286 94.673 15.36L1.983 300.63c-3.399 10.461 1.85 21.772 12.033 25.931l138.36 56.503c10.935 4.466 23.4-.962 27.58-12.009L297.422 60.621c4.613-12.19-2.878-25.596-15.678-28.055"
        ></Path>
      </Svg>
      <BlurBackground style={{ top: 200, left: 50 }} />
      <Image
        source={require("@/assets/images/beer-person-logo.png")}
        style={styles.logo}
      />
      <View style={{ width: "100%", alignItems: "center" }}>
        <ThemedText type="title">ETIKET'</ThemedText>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.buttonText}>Se Connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => router.push("/signup")}
        >
          <Text style={styles.signupButtonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    position: "relative",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    padding: 10,
    width: 300,
    height: 400,
    // marginBottom: 20,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    letterSpacing: 3,
    marginBottom: 20,
    fontFamily: "FredokaBold",
  },
  button: {
    width: "70%",
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
    width: "70%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    // marginVertical: 10,
    borderWidth: 1,
    borderColor: "#FFB74D",
  },
  signupButtonText: {
    fontSize: 18,
    color: "#FFB74D",
    fontWeight: "bold",
  },
});
