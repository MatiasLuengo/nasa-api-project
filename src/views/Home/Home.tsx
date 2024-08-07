import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import TodayImage from "../../components/TodayImage";
import fetchData from "../../utils/fetch";
import { useEffect, useState } from "react";
import { PostImage } from "../../types";
export default function Home() {
  const [todayImage, setTodayImage] = useState<PostImage>({});

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await fetchData();
        setTodayImage(todayImageResponse);
      } catch (error) {
        console.error(error);
        setTodayImage({});
      }
    };
    loadTodayImage().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodayImage {...todayImage} />
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
