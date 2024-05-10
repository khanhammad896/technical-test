import { StyleSheet, Text, View, ViewProps } from "react-native";
import React from "react";
import { Typography } from "../typography";
import { Stack } from "../stack";
import ChoiceButton from "../ChoiceButton";

type ChoiceGroupProps = ViewProps & {
  label?: string;
  selected?: number;
  choices: string[];
};

const ChoiceGroup = (props: ChoiceGroupProps) => {
  const { label, choices = [], selected, style } = props;
  return (
    <View style={[styles.root, style]}>
      {label && <Typography.Bold>{label}</Typography.Bold>}
      <Stack.Row justifiedBetween style={styles.buttonGroup}>
        {choices.map((choice, index) => {
          return (
            <ChoiceButton
              key={index}
              style={styles.button}
              chosen={selected === index}
            >
              {choice}
            </ChoiceButton>
          );
        })}
      </Stack.Row>
    </View>
  );
};

export default ChoiceGroup;

const styles = StyleSheet.create({
  root: {
    width: "100%",
  },
  buttonGroup: {
    marginTop: 14,
    marginLeft: -13,
  },
  button: {
    flex: 1,
    marginLeft: 13,
  },
});
