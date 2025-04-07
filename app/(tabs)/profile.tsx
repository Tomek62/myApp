import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useAuth } from '@/context/AuthContext';
export default function ProfileScreen() {
  const router = useRouter();
  const { logout } = useAuth();
  return (
    <ParallaxScrollView headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
          headerImage={
            <Image
              source={require("@/assets/images/partial-react-logo.png")}
              style={styles.reactLogo}
            />
          }>
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl text-white">Profil</Text>
      <Image
        source={require('@/assets/images/beer-person-logo.png')}
        width={200}
        height={200}
        />
          <TouchableOpacity style={styles.signupButton} onPress={async () => {
  await AsyncStorage.removeItem('token');
  router.push('/login');
  console.log("🚮 Token supprimé !");
}}>
  <Text>Supprimer le token</Text>
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