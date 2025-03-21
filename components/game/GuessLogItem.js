import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary[800],
    borderWidth: 1,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent[500],
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
    fontSize: 16,
  },
});
