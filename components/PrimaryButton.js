import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const PrimaryButton = ({ onPress, children }) => {
  return (
    <View style={styles.buttonOuter}>
      <Pressable
        android_ripple={{ color: "#941e58" }}
        onPress={onPress}
        style={({ pressed }) => [
          styles.buttonInner,
          pressed && styles.pressedButton,
        ]}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInner: {
    backgroundColor: "#4e0328",
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    padding: 2,
  },
  pressedButton: {
    backgroundColor: "#751444",
    opacity: 0.75,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
