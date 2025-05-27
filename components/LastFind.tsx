import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface WineCardProps {
  imageSource: any;
  name: string;
  origin: string;
  aromas: string;
  rating: string;
  onPress?: () => void;
}

const LastFind: React.FC<WineCardProps> = ({
  imageSource,
  name,
  origin,
  aromas,
  rating,
  onPress,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
      </View>

      <View style={styles.infoContainer}>
        <InfoRow emoji="ℹ️" label="Nom" value={name} />
        <InfoRow emoji="📍" label="Provenance" value={origin} />
        <InfoRow emoji="🍷" label="Arômes" value={aromas} />
        {/* <InfoRow emoji="⭐" label="Note" value={rating} /> */}

        <TouchableOpacity onPress={onPress} style={styles.moreButton}>
          <Text style={styles.moreText}>Voir Plus &gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Composant pour afficher une ligne d'information avec une icône
const InfoRow = ({
  emoji,
  label,
  value,
}: {
  emoji: string;
  label: string;
  value: string;
}) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>
      {emoji} <Text style={styles.boldText}>{label} :</Text>
    </Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
    alignItems: "center",
    alignSelf: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 160,
  },
  infoContainer: {
    flex: 1.5,
    backgroundColor: "#FFF6E5",
    padding: 12,
    borderRadius: 12,
  },
  infoRow: {
    flexDirection: "column",
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: "500",
  },
  boldText: {
    fontWeight: "bold",
  },
  infoValue: {
    fontSize: 14,
    color: "#333",
  },
  moreButton: {
    marginTop: 8,
  },
  moreText: {
    fontSize: 12,
    color: "#A0A0A0",
    textAlign: "right",
  },
});

export default LastFind;
