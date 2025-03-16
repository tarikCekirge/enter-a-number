import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View>
      <Title> Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
