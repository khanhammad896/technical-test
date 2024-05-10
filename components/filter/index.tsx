import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Stack } from "../stack";
import { Typography } from "../typography";
import { Colors } from "@/constants/Colors";
import RangeSlider from "./RangeSlider";
import SelectDropdown from "./SelectDropdown";
import RadioButton from "./RadioButton";
import ChoiceGroup from "./ChoiceGroup";
import { ScrollView } from "react-native-gesture-handler";

type FilterFormProps = {
  onDismiss: () => void;
};

const FilterForm = (props: FilterFormProps) => {
  const { onDismiss } = props;
  return (
    <BottomSheetView style={styles.contentContainer}>
      <Stack.Row fullWidth alignCenter justifiedBetween>
        <Pressable onPress={onDismiss}>
          <Typography.Medium color={Colors.light.primary}>
            Cancel
          </Typography.Medium>
        </Pressable>
        <Typography.Bold>Filter</Typography.Bold>
        <Pressable onPress={onDismiss}>
          <Typography.Bold color={Colors.light.primary}>Done</Typography.Bold>
        </Pressable>
      </Stack.Row>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 34 }}
        showsVerticalScrollIndicator={false}
      >
        <RangeSlider label="Âge" />
        <RangeSlider label="Hauteur" style={{ marginTop: 64 }} />
        <SelectDropdown
          label="Origine"
          value="Scandinave"
          containerStyle={{ marginTop: 66 }}
        />
        <SelectDropdown
          label="Religion"
          value="Taoïsme"
          containerStyle={{ marginTop: 20 }}
        />
        <RadioButton
          containerStyle={{ marginTop: 26 }}
          label="Licence"
          checked
        />
        <RadioButton containerStyle={{ marginTop: 14 }} label="Master" />
        <ChoiceGroup
          style={{ marginTop: 32 }}
          choices={["Jamais", "Parfois", "Souvent"]}
          label="Tabac"
          selected={1}
        />
        <ChoiceGroup
          style={{ marginTop: 32 }}
          choices={["Jamais", "Parfois", "Souvent"]}
          label="Alcool"
          selected={1}
        />
      </ScrollView>
    </BottomSheetView>
  );
};

export default FilterForm;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});
