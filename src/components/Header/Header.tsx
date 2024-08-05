import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
const nasaLogo = require("../../../assets/nasalogo.png");
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image source={nasaLogo} style={styles.logo} resizeMode="contain" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer: {
    display: "flex",
    alignItems: "flex-start",
    flex: 1,
  },
  rightContainer: {
    display: "flex",
    alignItems: "flex-end",
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  logo: {
    width: 70,
    height: 70,
  },
});
