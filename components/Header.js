import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Score App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#059487",
    height: 50,
    padding: 50,
  },
  text: {
    color: "white",
    fontSize: 23,
    textAlign: "center",
  },
});
