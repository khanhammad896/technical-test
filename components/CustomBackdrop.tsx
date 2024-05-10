import React from "react";

import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

const CustomBackdrop = () => {
  return (
    <BlurView
      experimentalBlurMethod="dimezisBlurView"
      style={StyleSheet.absoluteFillObject}
      intensity={90}
    />
  );
};

export default CustomBackdrop;
