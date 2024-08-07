import { FC } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { PostImage } from "../../types";
export default function TodayImage({ date, url, title }: PostImage) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.tittle}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          alert("View");
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>View</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    borderRadius: 30,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 2,
  },
  tittle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
  },
  date: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    marginHorizontal: "auto",
    backgroundColor: "#44a7f4",
    padding: 10,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
