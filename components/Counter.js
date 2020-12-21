import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NumericInput from "react-native-numeric-input";

export default function Counter({ title = "Player", qty = 0, qtyChange }) {
  return (
    <View style={styles.player}>
      <Text style={styles.playerTitle} testID="title">
        {title}
      </Text>

      <NumericInput
        rounded
        borderColor="#059487"
        iconStyle={{ color: "white" }}
        leftButtonBackgroundColor="#059487"
        minValue={0}
        onChange={qtyChange}
        rightButtonBackgroundColor="#059487"
        textColor="#059487"
        value={qty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  player: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    flexBasis: "50%",
    justifyContent: "center",
    marginBottom: 40,
  },
  playerTitle: {
    color: "#059487",
    fontSize: 22,
    marginBottom: 10,
  },
});
