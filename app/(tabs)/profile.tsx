import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useAuth } from "@/context/AuthContext";
import { ThemedText } from "@/components/ThemedText";
import { SubSection } from "@/components/SubSection";
import { ThemedView } from "@/components/ThemedView";
import { capitalizeAll } from "@/utils/utils";

export default function ProfileScreen() {
  const router = useRouter();
  const { logout, user } = useAuth();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View className="flex-1 justify-center items-center">
        <ThemedText
          type="subtitle"
          style={{ marginBottom: 20, fontWeight: "bold" }}
        >
          Votre Profil
        </ThemedText>
        {/* <Image
          source={require("@/assets/images/beer-person-logo.png")}
          width={40}
          height={40}
        /> */}
        <View style={styles.card}>
          <ThemedText
            type="defaultSemiBold"
            style={{ marginBottom: 20, textAlign: "center" }}
          >
            {capitalizeAll("Informations générales")}
          </ThemedText>
          <SubSection title="Pseudo">
            <TextInput
              style={{
                height: 40,
                borderColor: "#FFB74D",
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
              value={user?.pseudo || "Votre pseudo ici"}
              editable={false}
              selectTextOnFocus={false}
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={(text) => console.log(text)}
            />
          </SubSection>
          <SubSection title="Email">
            <TextInput
              style={{
                height: 40,
                borderColor: "#FFB74D",
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
              value={user?.email || "Votre email ici"}
              editable={false}
              selectTextOnFocus={false}
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={(text) => console.log(text)}
            />
          </SubSection>
          <SubSection title="Mot de passe">
            <TextInput
              style={{
                height: 40,
                borderColor: "#FFB74D",
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
              value={user?.password || "Votre email ici"}
              editable={false}
              selectTextOnFocus={false}
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={(text) => console.log(text)}
            />
          </SubSection>
          <TouchableOpacity
            style={styles.signupButton}
          onPress={async () => {
            await AsyncStorage.removeItem("token");
            router.push("/login");
            console.log("🚮 Token supprimé !");
          }}
        >
          <Text style={styles.signupButtonText}>Modifier mon profil</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={async () => {
            await AsyncStorage.removeItem("token");
            router.push("/login");
            console.log("🚮 Token supprimé !");
          }}
        >
          <Text style={styles.signupButtonText}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}
const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  signupButton: {
    margin: "auto",
    width: "70%",
    height: 50,
    backgroundColor: "#FFB74D",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
    borderWidth: 1,
    borderColor: "#FFB74D",
  },
  signupButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
});
