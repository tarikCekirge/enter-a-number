import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/gameover.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.heightLight}>{roundsNumber}</Text>{" "}
        rounds to gues the number{" "}
        <Text style={styles.heightLight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>NEW GAME</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    overflow: "hidden",
    borderRadius: 200,
    borderWidth: 4,
    borderColor: Colors.primary[800],
    margin: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  heightLight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary[500],
  },
});
