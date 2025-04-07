import { SubSection } from "@/components/SubSection";
import { ThemedText } from "@/components/ThemedText";
import BlurBackground from "@/components/ui/BlurBackground";
import LastFind from "@/components/LastFind";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CollectionContainer from "@/components/CollectionContainer";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

export default function CategoryScreen() {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  return (
    <View style={styles.container}>
      <BlurBackground style={{ bottom: 0, left: 0 }} />
      <ThemedText type="subtitle" style={{ fontWeight: "bold" }}>Catégorie Bière 🍺</ThemedText>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 150 }}
      >
      <SubSection title="Progression">
        <View style={styles.progressContainer}>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: `76%` }]} />
          </View>
          <Text style={styles.progressText}>76%</Text>
        </View>
      </SubSection>
      <SubSection title="🔍 Dernière Trouvaille">
        <LastFind
          imageSource={require("@/assets/images/paix-dieu.png")}
          origin="France"
          aromas="Fruits rouges, épices"
          rating="4.5/5"
        />
      </SubSection>
      <SubSection title="Ma Collection">
        <CollectionContainer />
      </SubSection>  
      </Animated.ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 64,
    gap: 16,
    overflow: "hidden",
  },
  progressLabel: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 4,
  },
  progressText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
