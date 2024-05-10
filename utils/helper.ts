import { PixelRatio } from "react-native";

const fontScalee = PixelRatio.getFontScale();
const roundedFontScale = parseFloat(fontScalee.toFixed(2)); // Round to 2 decimal places
const maxFontScale = roundedFontScale === 1.1 ? 0.99 : 1.5; // Set to 1 to disable font scaling

export const getFontSize = (size: number) => {
  const fontScale = PixelRatio.getFontScale();
  const adjustedFontScale = Math.min(fontScale, maxFontScale);
  return size / adjustedFontScale;
};
