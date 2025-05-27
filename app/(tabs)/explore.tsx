import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Camera, CameraView } from "expo-camera";
import LoaderScreen from "@/components/LoaderScreen";
import {
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import ResultModal from "@/components/ResultModal";
import { useAuth } from "@/context/AuthContext";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanning, setScanning] = useState(false);
  const [type, setType] = useState("back");
  const [result, setResult] = useState<any>(null);
  const cameraRef = useRef<Camera | null>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { user } = useAuth();
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePictureAndAnalyze = async () => {
    if (!cameraRef.current) return;

    setScanning(true);
    try {
      const photo = await cameraRef.current.takePictureAsync({
        base64: true,
        quality: 0.3,
      });

      const response = await fetch("http://172.20.10.2:5000/images/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageUrl: `${photo.base64}`,
          user_id: user.user_id,
        }),
      });

      const result = await response.json();
      setResult(result);
      console.log(result);
      bottomSheetModalRef.current?.present();
      setTimeout(() => {
        bottomSheetModalRef.current?.snapToIndex(0);
      }, 100);
    } catch (error) {
      alert("Erreur lors de l'analyse.");
    } finally {
      setScanning(false);
    }
  };

  const handleSheetChanges = useCallback((index: number) => {
    console.log("BottomSheet index:", index);
  }, []);

  if (hasPermission === null) return <Text>Demande de permission...</Text>;
  if (hasPermission === false) return <Text>Accès à la caméra refusé</Text>;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          {scanning ? (
            <LoaderScreen />
          ) : (
            <CameraView ref={cameraRef} style={styles.camera}>
              <TouchableOpacity
                style={styles.button}
                onPress={takePictureAndAnalyze}
                disabled={scanning}
              >
                <Text style={styles.text}>Scanner</Text>
              </TouchableOpacity>
            </CameraView>
          )}
          <ResultModal
            bottomSheetModalRef={bottomSheetModalRef}
            result={result}
            handleSheetChanges={handleSheetChanges}
          />
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1, justifyContent: "flex-end" },
  button: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    backgroundColor: "#FFCF82",
    padding: 15,
    borderRadius: 10,
  },
  text: { color: "white", fontWeight: "bold" },
  modalBackground: {
    backgroundColor: "white",
    borderRadius: 20,
  },
  modalView: {
    flex: 1,
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "#FFCF82",
    flexDirection: "row",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButton: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 12,
    marginRight: 5,
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "FredokaSemiBold",
    marginBottom: 16,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    backgroundColor: "#FFCF82",
    position: "relative",
  },
  headerCard: {
    marginVertical: 32,
    paddingBottom: 16,
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 100,
    height: 160,
    position: "absolute",
    top: 0, // Centre verticalement
    left: "50%", // Centre horizontalement
    transform: [{ translateX: -50 }],

    zIndex: 1,
  },
});
