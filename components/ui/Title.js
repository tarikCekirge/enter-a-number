import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.base,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.base,
    padding: 12,
    marginBottom: 8,
    fontFamily: "open-sans-bold",
  },
});
