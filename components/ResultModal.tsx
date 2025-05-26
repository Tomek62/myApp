import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { ThemedText } from "@/components/ThemedText";
import BlurBackground from "@/components/ui/BlurBackground";
import Svg, { Path } from "react-native-svg";

export default function ResultModal({
  result,
  bottomSheetModalRef,
  handleSheetChanges,
}: {
  result: any;
  bottomSheetModalRef: any;
  handleSheetChanges: any;
}) {
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={["90%"]}
      onChange={handleSheetChanges}
      enableDismissOnClose={true}
      backgroundStyle={styles.modalBackground}
    >
      <BottomSheetView style={styles.modalView}>
        <BlurBackground style={{ bottom: 0, left: 0 }} />

        <ThemedText type="subtitle">
          🎉 NOUVELLE{" "}
          <ThemedText type="subtitle" style={{ fontWeight: "bold" }}>
            TROUVAILLE
          </ThemedText>{" "}
          🎉
        </ThemedText>
        <View style={styles.headerCard}>
          <Image
            source={require("@/assets/images/paix-dieu.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.circle}></View>
        </View>
        <Text style={styles.modalText}>
          {result?.data?.item_name || "Aucun résultat"}
        </Text>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 150 }}
        >
          <View style={{ padding: 20, borderRadius: 20 }}>
            <View style={{ gap: 32 }}>
              <View>
                <ThemedText type="defaultSemiBold">📍 Provenance :</ThemedText>
                <ThemedText type="default">
                  {result?.data?.provenance ||
                    "Aucune information concernant la provenance"}
                </ThemedText>
              </View>
              <View>
                <ThemedText type="defaultSemiBold">🍷 Arômes :</ThemedText>
                <ThemedText type="default">
                  {result?.data?.aromes ||
                    "Aucune information concernant l'accompagnement'"}
                </ThemedText>
              </View>
              <View>
                <ThemedText type="defaultSemiBold">📜 Description :</ThemedText>
                <ThemedText type="default">
                  {result?.data?.description ||
                    "Aucune information concernant l'accompagnement'"}
                </ThemedText>
              </View>
              <View>
                <ThemedText type="defaultSemiBold">
                  🤝🏼 Accords suggérés :
                </ThemedText>
                <ThemedText type="default">
                  {result?.data?.accords ||
                    "Aucune information concernant l'accompagnement'"}
                </ThemedText>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            position: "absolute",
            bottom: 130,
            width: "100%",
          }}
        >
          <TouchableOpacity style={styles.closeButton}>
            <Text style={styles.textStyle}>Voir nos commerçants</Text>
            <Svg width="15" height="13" fill="none" viewBox="0 0 15 13">
              <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.208 5.958 8.5 12.333m3.542-6.375L9.208 1M0 5.958h14.167m-13.104 0L2.196 11.2a1.42 1.42 0 0 0 1.416 1.133h6.942a1.416 1.416 0 0 0 1.417-1.133l1.204-5.242M1.771 9.146h10.625M2.125 5.958 4.958 1m0 4.958.709 6.375"
              ></Path>
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => bottomSheetModalRef.current?.close()}
          >
            <Text
              style={{
                color: "#DCDCDC",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 12,
                marginRight: 5,
              }}
            >
              Ajouter à mes favoris
            </Text>
            <Svg width="15" height="15" fill="none" viewBox="0 0 33 32">
              <Path
                fill="#DCDCDC"
                d="M11.12.349q1.493.09 2.882.609l.093.003a.6.6 0 0 1 .14.097c.346.123.673.26.985.443l.593.287c.234.134.512.378.667.48.155.098.327.2.466.313A9.92 9.92 0 0 1 23.1.707c.999.03 1.992.2 2.93.547 5.785 2.073 7.698 8.546 5.773 14.096a20.15 20.15 0 0 1-4.99 7.469 61 61 0 0 1-10.254 7.55l-.402.227-.404-.267a60.3 60.3 0 0 1-9.846-8.15A20.5 20.5 0 0 1 1.37 14.44C-.252 8.785 2.044 2.438 8.007.682c.463-.144.94-.241 1.417-.289l.19.006a9 9 0 0 1 1.332-.055zM25.072 5.77a1.27 1.27 0 0 0-1.622.744 1.295 1.295 0 0 0 .742 1.652c1.003.41 1.652 1.43 1.62 2.535l-.002.05c-.04.36.058.714.271.99.214.275.542.442.889.485a1.3 1.3 0 0 0 1.286-1.167l.006-.188c.113-2.216-1.17-4.264-3.19-5.1"
              ></Path>
            </Svg>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  modalBackground: {
    // backgroundColor: "white",
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
