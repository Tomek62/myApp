import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
interface CollectionCardProps {
  type: "beer" | "wine";
  progress: number;
} 

export function CollectionCard({ type, progress }: CollectionCardProps) {
  const isBeer = type === "beer";
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push('/category')} activeOpacity={0.7}>
      <View style={styles.header}>
        <Text style={styles.icon}>{isBeer ? "🍺" : "🍷"}</Text>
        <Text style={styles.title}>{isBeer ? "Catégorie Bière" : "Catégorie Vin"}</Text>
      </View>
      <Text style={styles.progressLabel}>Progression :</Text>

      {/* Barre de progression en natif */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{progress}%</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    fontSize: 20,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  progressLabel: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
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
