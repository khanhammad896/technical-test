import { Dimensions, StyleSheet, View, ViewProps } from "react-native";
import React from "react";
import { Stack } from "../stack";
import { Typography } from "../typography";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { Colors } from "@/constants/Colors";

type RangeSliderProps = ViewProps & {
  label: string;
};

const { width } = Dimensions.get("screen");

const CustomMarker = () => {
  return <View style={styles.marker}></View>;
};

const RangeSlider = (props: RangeSliderProps) => {
  const { label } = props;
  return (
    <Stack.Column fullWidth {...props}>
      <Typography.Bold>{label}</Typography.Bold>
      <MultiSlider
        sliderLength={width - 32}
        min={0}
        max={10}
        values={[3, 8]}
        customMarker={CustomMarker}
        trackStyle={{
          backgroundColor: Colors.light.contrast,
          height: 6,
          borderRadius: 3,
        }}
        selectedStyle={{ backgroundColor: Colors.light.primary }}
        markerOffsetX={6}
        markerOffsetY={3}
        containerStyle={{
          marginTop: 17,
          height: "auto",
        }}
      />
    </Stack.Column>
  );
};

export default RangeSlider;

const styles = StyleSheet.create({
  marker: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: Colors.light.white,
    borderWidth: 2,
    borderColor: Colors.light.primary,
  },
});
