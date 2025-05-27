import React from "react";
import { View, Image, StyleSheet, Text, FlatList } from "react-native";
import { ThemedText } from "./ThemedText";

export default function CollectionContainer() {
  return (
    <View style={styles.container}>
      {/* Barre d'information */}
      <View style={styles.header}>
        <Text style={styles.textLabel}>🔍 Nombre de trouvailles :</Text>
        <Text style={styles.textValue}>90%</Text>
      </View>

      {/* Grille des objets trouvés */}
      <FlatList
        data={[
          {
            id: 1,
            name: "Objet 1",
            image: require("@/assets/images/paix-dieu.png"),
          },
          {
            id: 2,
            name: "Objet 2",
            image: require("@/assets/images/paix-dieu.png"),
          },
          {
            id: 3,
            name: "Objet 3",
            image: require("@/assets/images/paix-dieu.png"),
          },
          {
            id: 4,
            name: "Objet 4",
            image: require("@/assets/images/paix-dieu.png"),
          },
          {
            id: 5,
            name: "Objet 5",
            image: require("@/assets/images/paix-dieu.png"),
          },
          {
            id: 6,
            name: "Objet 6",
            image: require("@/assets/images/paix-dieu.png"),
          },
          {
            id: 7,
            name: "Objet 7",
            image: require("@/assets/images/paix-dieu.png"),
          },
          {
            id: 8,
            name: "Objet 8",
            image: require("@/assets/images/paix-dieu.png"),
          },
        ]}
        numColumns={3}
        scrollEnabled={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            {item.image ? (
              <Image source={{ uri: item.image }} style={styles.image} />
            ) : (
              <View style={styles.placeholder}>
                <Text style={styles.questionMark}>?</Text>
              </View>
            )}
            <Text style={styles.itemName}>{item.image ? item.name : ""}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#FDF8F3",
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  textLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  textValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemContainer: {
    width: 70,
    height: 70,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  questionMark: {
    fontSize: 24,
    color: "#A0A0A0",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  itemName: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
  },
});
