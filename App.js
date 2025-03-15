import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <>
      <StartGameScreen />
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({});
