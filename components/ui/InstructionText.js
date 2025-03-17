import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const InstructionText = ({ children }) => {
  return (
    <View>
      <Text style={styles.instructionText}>{children}</Text>
    </View>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.accent[500],
    fontWeight: "bold",
  },
});
