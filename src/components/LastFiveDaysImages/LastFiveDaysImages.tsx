import { View, Text, StyleSheet, ScrollView } from "react-native";
import { PostImage as PostImageType } from "../../types";
import PostImage from "./PostImage";

export default function LastFiveDaysImages({
  arrayImages,
}: {
  arrayImages: PostImageType[];
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {arrayImages?.map((image, index) => (
          <PostImage key={index} {...image} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  tittle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 16,
  },
  content: {
    paddingTop: 10,
  },
});
