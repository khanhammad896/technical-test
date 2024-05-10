import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { Typography } from "./typography";
import { Colors } from "@/constants/Colors";

type ChoiceButtonProps = TouchableOpacityProps & {
  chosen?: boolean;
};

const ChoiceButton = (props: ChoiceButtonProps) => {
  const { children, chosen, style, ...rest } = props;
  return (
    <TouchableOpacity
      style={[
        styles.root,
        style,
        { backgroundColor: chosen ? Colors.light.primary : "#222021" },
      ]}
      {...rest}
    >
      {chosen ? (
        <Typography.Bold>{children}</Typography.Bold>
      ) : (
        <Typography.Medium>{children}</Typography.Medium>
      )}
    </TouchableOpacity>
  );
};

export default ChoiceButton;

const styles = StyleSheet.create({
  root: {
    borderRadius: 8,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
