import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const StartGameScreen = () => {
  return (
    <View>
      <Text>StartGameScreen</Text>
      <TextInput placeholder='Enter Number' />
      <Button title='Enter' />
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({});
