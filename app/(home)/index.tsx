import {
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { coverUri } from "@/constants/Data";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <ImageBackground source={{ uri: coverUri }} style={styles.root}>
        <View style={styles.container}>
          <View style={styles.filterContainer}>
            <Pressable style={styles.filterButton}>
              <Image source={require("@/assets/images/bars-sort.png")} />
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: StatusBar.currentHeight! + 15,
  },
  cover: {
    width: "100%",
    height: "100%",
  },
  filterContainer: {
    alignItems: "flex-end",
  },
  filterButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});
