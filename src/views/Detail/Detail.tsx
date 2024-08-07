import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export default function Detail() {
  const {
    params: { title, url, date, explanation },
  } = useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{ uri: url }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
  },
  content: {
    flex: 1,
    backgroundColor: "#2c449d",
    padding: 16,
    borderRadius: 30,
    marginVertical: 16,
    width: "100%",
    maxWidth: 500,
    marginHorizontal: "auto",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 16,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  date: {
    color: "white",
    marginBottom: 16,
    fontSize: 16,
  },
  explanation: {
    color: "white",
    fontSize: 20,
  },
});
