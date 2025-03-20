import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/gameover.png")}
        />
      </View>
      <Text>Your phone needed X rounds to gues the number Y.</Text>
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
});
