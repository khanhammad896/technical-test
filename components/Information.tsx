import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "./stack";
import { Typography } from "./typography";
import { Ionicons } from "@expo/vector-icons";

type InformationProps = {
  name: string;
  age: number;
  location: string;
  about: string;
};

const Information = (props: InformationProps) => {
  const { name, age, location, about } = props;
  return (
    <Stack.Column stretched justifiedEnd>
      <Typography.Bold size={26}>
        {name}, {age}
      </Typography.Bold>
      <Stack.Row alignCenter style={{ marginTop: 8 }}>
        <Ionicons name="location-outline" size={14} color="white" />
        <Typography.Medium style={{ marginLeft: 6 }}>
          {location}
        </Typography.Medium>
      </Stack.Row>
      <Typography.Medium style={{ marginTop: 12 }}>{about}</Typography.Medium>
    </Stack.Column>
  );
};

export default Information;

const styles = StyleSheet.create({});
