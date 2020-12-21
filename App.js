import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Counter from "./components/Counter";
import Header from "./components/Header";

export default function App() {
  const [total, setTotal] = useState(0);
  const [players, setPlayers] = useState([
    {
      name: "Player 1",
      qty: 0,
    },
    {
      name: "Player 2",
      qty: 0,
    },
    {
      name: "Player 3",
      qty: 0,
    },
    {
      name: "Player 4",
      qty: 0,
    },
  ]);

  playerQtyChange = (index, qty) => {
    // update players
    const playersUpdated = updateArray(players, index, "qty", qty);
    setPlayers(playersUpdated);

    // update total
    const totalUpdated = sumArray(playersUpdated.map((player) => player.qty));
    setTotal(totalUpdated);
  };

  updateArray = (array, index, key, value) => {
    const arrayTemp = [...array];

    arrayTemp[index][key] = value;

    return arrayTemp;
  };

  sumArray = (array = []) => {
    return array.reduce((qty, result) => {
      result += qty;

      return result;
    }, 0);
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.mainContent}>
        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Total Score</Text>

          <Text style={styles.summaryQty} testID="totalScore">
            {total}
          </Text>
        </View>

        <View style={styles.players}>
          {players.map((player, index) => {
            return (
              <Counter
                key={index}
                title={player.name}
                qty={player.qty}
                qtyChange={(qty) => playerQtyChange(index, qty)}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  summary: {
    marginBottom: 30,
  },
  summaryTitle: {
    color: "#059487",
    fontSize: 26,
    textAlign: "center",
  },
  summaryQty: {
    color: "#059487",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  players: {
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
  },
});
