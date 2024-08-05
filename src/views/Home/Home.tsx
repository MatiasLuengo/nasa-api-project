import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flex: 1,
  },
});
