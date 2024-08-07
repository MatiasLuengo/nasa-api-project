import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import TodayImage from "../../components/TodayImage";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";
import fetchData from "../../utils/fetch";
import { useEffect, useState } from "react";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
export default function Home() {
  const [todayImage, setTodayImage] = useState<PostImage>({});
  const [last5daysImages, setLast5daysImages] = useState<PostImage[]>([]);

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

    const loadLast5DaysImage = async () => {
      try {
        const todayDate = format(new Date(), "yyyy-MM-dd");
        const fiveDaysAgo = format(sub(new Date(), { days: 5 }), "yyyy-MM-dd");
        const last5DaysImageResponse = await fetchData(
          `&start_date=${fiveDaysAgo}&end_date=${todayDate}`
        );
        setLast5daysImages(last5DaysImageResponse);
      } catch (error) {
        setLast5daysImages([]);
        console.error(error);
      }
    };

    loadLast5DaysImage().catch(null);
    loadTodayImage().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <Header />
        <TodayImage {...todayImage} />
        <LastFiveDaysImages arrayImages={last5daysImages} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(7,26,93,255)",
    width: "100%",
    display: "flex",
    flex: 1,
  },
  homeContainer: {
    display: "flex",
    width: "100%",
    maxWidth: 500,
    marginHorizontal: "auto",
    flex: 1,
  },
});
