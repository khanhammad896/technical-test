import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Typography } from "../typography";
import { Stack } from "../stack";
import Ionicons from "@expo/vector-icons/Ionicons";

type SelectDropdownProps = PressableProps & {
  label: string;
  value: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const SelectDropdown = (props: SelectDropdownProps) => {
  const { label, value, containerStyle } = props;
  return (
    <Pressable style={[styles.root, containerStyle]} {...props}>
      <Stack.Row alignCenter>
        <Stack.Column stretched>
          <Typography.Medium color={Colors.light.primary}>
            {label}
          </Typography.Medium>
          <Typography.Medium style={{ marginTop: 4 }}>
            {value}
          </Typography.Medium>
        </Stack.Column>
        <Ionicons name="caret-down" size={24} color={Colors.light.white} />
      </Stack.Row>
    </Pressable>
  );
};

export default SelectDropdown;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    backgroundColor: "#1F1216",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.light.primary,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
});
