import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  // const insets = useSafeAreaInsets();
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsover, setGameIsover] = useState(true);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const pickedGameHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsover(false);
  };

  const gameOverHandler = () => {
    setGameIsover(true);
  };

  let screen = <StartGameScreen onPickNumber={pickedGameHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsover && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary[500], Colors.primary[600], Colors.accent[500]]}
      locations={[0.1, 0.5, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.appContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode='cover'
        style={styles.appContainer}
        imageStyle={styles.bgImage}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>

      <StatusBar style='auto' />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 28,
  },
  appContainer: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.5,
  },
});
