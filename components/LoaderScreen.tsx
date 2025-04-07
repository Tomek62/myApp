import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle, Text as SvgText } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

const LoaderScreen = () => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 1000, easing: Easing.linear }),
      -1
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <View style={styles.container}>
      {/* Cercle animé */}
      <Animated.View style={animatedStyle}>
        <Svg height="100" width="100" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            strokeWidth="5"
            fill="none"
            strokeDasharray="250"
            strokeDashoffset="50"
          />
        </Svg>
      </Animated.View>

      {/* Texte fixe au centre */}
      <Svg height="100" width="100" viewBox="0 0 100 100" style={styles.textContainer}>
        <SvgText
          x="50"
          y="50"
          dy="6"  // 🔥 Ajuste la position verticale
          fontSize="20"
          fontWeight="bold"
          fill="black"
          textAnchor="middle"
        >
          E'
        </SvgText>
      </Svg>

      <Text style={styles.text}>Détection en cours...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  textContainer: {
    position: "absolute",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "FredokaBold",
  },
});

export default LoaderScreen;
