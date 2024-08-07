import { View, Text, Pressable, StyleSheet } from "react-native";
import { PostImage as PostImageType, NavigationProps } from "../../../types";
import { useNavigation } from "@react-navigation/native";

export default function PostImage({
  date,
  title,
  url,
  explanation,
}: PostImageType) {
  const { navigate } = useNavigation<NavigationProps>();
  const handleViewPress = () => {
    navigate("Detail", { title, url, date, explanation });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Pressable style={styles.button} onPress={handleViewPress}>
        <Text style={{ color: "white", fontSize: 16 }}>View</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    borderRadius: 20,
    marginBottom: 14,
    padding: 16,
  },
  tittle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  date: {
    color: "white",
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    width: "80%",
    marginHorizontal: "auto",
    backgroundColor: "#44a7f4",
    padding: 10,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
