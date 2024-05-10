import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { Stack } from "../stack";
import { Typography } from "../typography";

type RadioButtonProps = PressableProps & {
  label: string;
  checked?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

const RADIO_SIZE = 18;
const RADIO_INNER_SIZE = 10;

const Radio = (props: Pick<RadioButtonProps, "checked">) => {
  const { checked } = props;
  return (
    <View style={[styles.radio]}>
      {checked && <View style={styles.radioInner} />}
    </View>
  );
};

const RadioButton = (props: RadioButtonProps) => {
  const { checked, containerStyle, label } = props;
  return (
    <Pressable style={[styles.root, containerStyle]} {...props}>
      <Stack.Row alignCenter>
        <Radio checked={checked} />
        <Typography.Medium style={styles.label}>{label}</Typography.Medium>
      </Stack.Row>
    </Pressable>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    backgroundColor: "#303030AB",
    borderRadius: 16,
    padding: 12,
  },
  radio: {
    width: RADIO_SIZE,
    height: RADIO_SIZE,
    borderRadius: RADIO_SIZE / 2,
    borderWidth: 2,
    borderColor: "#ABABAB",
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    width: RADIO_INNER_SIZE,
    height: RADIO_INNER_SIZE,
    borderRadius: RADIO_INNER_SIZE / 2,
    backgroundColor: "#ABABAB",
  },
  label: {
    marginLeft: 16,
  },
});
