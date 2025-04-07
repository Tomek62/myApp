import { Image, StyleSheet, TouchableOpacity, Text ,View} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter, capitalizeAll } from "@/utils/utils";
import { SubSection } from "@/components/SubSection";
import BlurBackground from "@/components/ui/BlurBackground";
import LastFind from "@/components/LastFind";
import { CollectionCard } from "@/components/CollectionCard";
import Svg, { Path } from "react-native-svg";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  interface UserData {
    pseudo: string;
    email: string;
  }

  const [userDataBis, setUserData] = useState<UserData>({
    pseudo: "",
    email: "",
  });
  const router = useRouter();

  useEffect(() => {
    const loadUserData = async () => {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const parsedData = JSON.parse(userData);
        setUserData({ pseudo: parsedData.pseudo, email: parsedData.email });
        console.log("UserData :", parsedData);
      }
    };
    loadUserData();
  }, []);

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
      <ThemedView style={styles.titleContainer}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
        <ThemedText type="subtitle">
          HELLO,{" "}
          <ThemedText type="subtitle" style={{ fontWeight: "bold" }}>
            {capitalizeAll(userDataBis.pseudo)}
          </ThemedText>{" "}
        </ThemedText>
        <HelloWave />
        </View>
        <TouchableOpacity onPress={async () => {
          router.push('/(tabs)/favorite');
        }
        }>
        <Svg width="22" height="22" fill="none" viewBox="0 0 22 22">
          <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 19a6 6 0 0 0-6-6m0 0a6 6 0 0 0-6 6m6-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8m10-2c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10"
          ></Path>
        </Svg>
        </TouchableOpacity>
      </ThemedView>
      <SubSection title="Dernière Trouvaille">
        <LastFind
          imageSource={require("@/assets/images/paix-dieu.png")}
          origin="France"
          aromas="Fruits rouges, épices"
          rating="4.5/5"
        />
      </SubSection>
      <SubSection title="Mes Collections">
        <CollectionCard type="beer" progress={50}  />
        <CollectionCard type="wine" progress={75}  />
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreText}>Voir toutes mes collections &gt;</Text>
        </TouchableOpacity>
      </SubSection>
      <SubSection title="Dernières Recherches">
        <CollectionCard type="beer" progress={50}  />
        <CollectionCard type="wine" progress={75}  />
      </SubSection>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  moreButton: {
    marginTop: 8,
  },
  moreText: {
    fontSize: 12,
    color: "#A0A0A0",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
