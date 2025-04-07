import React from "react";
import { View, Text, TextInput, StyleSheet, TextInputProps } from "react-native";

export type InputProps = TextInputProps & {
  label?: string;
  isPassword?: boolean;
};

export function Input({ label, isPassword, style, ...props }: InputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, style]}
        secureTextEntry={isPassword}
        placeholderTextColor="#D3D3D3"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
    marginLeft: 10,
    fontFamily:'FredokaRegular'
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#FFCC82",
  },
});
