import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View, Platform } from "react-native";
import Home from "./src/views/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appView}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appView: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "android" ? 45 : 0,
  },
});
