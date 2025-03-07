import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { Href, router } from "expo-router";

interface IWallPaper {
  id: number;
  name: string;
  path: Href;
  imageUrl: any;
}

const { width } = Dimensions.get("window");
const ITEM_MARGIN = 8;
const ITEM_WIDTH = width / 2 - ITEM_MARGIN * 3;
const ITEM_HEIGHT = 160;

const WallpaperItem = ({ id, name, path, imageUrl }: IWallPaper) => {
  return (
    <TouchableOpacity onPress={() => router.push(path)} activeOpacity={0.8}>
      <View style={styles.container}>
        <ImageBackground
          source={imageUrl}
          style={styles.background}
          imageStyle={styles.imageStyle}
        >
          {/* 🔹 Texte avec fond semi-transparent */}
          <View style={styles.textContainer}>
            <Text style={styles.name}>{name}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default WallpaperItem;

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    marginHorizontal: ITEM_MARGIN,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end", // 🟢 Place le texte en bas
  },
  imageStyle: {
    borderRadius: 12, // 🟢 Ajoute un arrondi sur l’image de fond
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // 🟢 Fond semi-transparent pour le texte
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
