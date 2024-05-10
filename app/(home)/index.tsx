import {
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { coverUri } from "@/constants/Data";
import CustomBackdrop from "@/components/CustomBackdrop";
import FilterForm from "@/components/filter";
import { Typography } from "@/components/typography";
import { Stack } from "@/components/stack";
import Information from "@/components/Information";

const Home = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["50%", "90%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const onDismiss = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return (
    <>
      <ImageBackground source={{ uri: coverUri }} style={styles.root}>
        <View style={styles.container}>
          <View style={styles.filterContainer}>
            <Pressable
              style={styles.filterButton}
              onPress={handlePresentModalPress}
            >
              <Image source={require("@/assets/images/bars-sort.png")} />
            </Pressable>
          </View>
          <Information
            name="Emily"
            age={24}
            location="Paris"
            about="Lorem ipsum dolor sit amet consectetur. Scelerisque nulla tincid..."
          />
        </View>
      </ImageBackground>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={styles.sheetBackground}
        backdropComponent={CustomBackdrop}
      >
        <FilterForm onDismiss={onDismiss} />
      </BottomSheetModal>
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
  sheetBackground: {
    backgroundColor: "rgba(45,45,45,0.6)",
    borderRadius: 34,
  },
});
