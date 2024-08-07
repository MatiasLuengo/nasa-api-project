import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View, Platform } from "react-native";
import Routes from "./src/routes/Routes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appView}>
        <Routes />
        <StatusBar style="light" />
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
    width: "100%",
    backgroundColor: "rgba(7,26,93,255)",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "android" ? 45 : 0,
  },
});
