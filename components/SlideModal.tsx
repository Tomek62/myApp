import React, { useCallback } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerEventPayload } from "react-native-gesture-handler";

const { height } = Dimensions.get("window");

interface SlidingResultModalProps {
  visible: boolean;
  onClose: () => void;
  result: { data?: { nom?: string } } | null;
}

const SlidingResultModal = ({ visible, onClose, result }: SlidingResultModalProps) => {
  const translateY = useSharedValue(height);

  React.useEffect(() => {
    translateY.value = visible ? withSpring(0) : withSpring(height);
  }, [visible]);

  const gestureHandler = useCallback(({ nativeEvent }: { nativeEvent: PanGestureHandlerEventPayload }) => {
    if (nativeEvent.translationY > 100) {
      translateY.value = withSpring(height, {}, () => onClose());
    }
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.modal, animatedStyle]}>
          <Text style={styles.title}>Résultat</Text>
          <Text style={styles.text}>{result?.data?.nom || "Aucun résultat"}</Text>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  modal: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "50%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  handle: {
    width: 50,
    height: 5,
    backgroundColor: "gray",
    borderRadius: 2.5,
    marginBottom: 10,
  },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16 },
});

export default SlidingResultModal;
