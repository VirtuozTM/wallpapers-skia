import React, { useMemo } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WallpaperItem from "@/components/WallpaperItem";
import { Href } from "expo-router";

interface IWallPaper {
  id: number;
  name: string;
  path: Href;
  imageUrl: string;
}

const wallpapers: IWallPaper[] = [
  {
    id: 1,
    name: "WallPaper 1",
    path: "/wallpaper1",
    imageUrl: require("@/assets/images/wallpaper_1.png"),
  },
  {
    id: 2,
    name: "WallPaper 2",
    path: "/wallpaper2",
    imageUrl: require("@/assets/images/wallpaper_2.png"),
  },
];

const Home = () => {
  const memoizedWallpapers = useMemo(() => wallpapers, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Wallpapers</Text>

      <FlatList
        data={memoizedWallpapers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <WallpaperItem {...item} />}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
