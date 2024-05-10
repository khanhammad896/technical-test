import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import ProfileAvatar from "@/components/ProfileAvatar";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#101010",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Favorite",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "heart-circle" : "heart"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={
                  focused
                    ? "chatbubble-ellipses-outline"
                    : "chatbubble-ellipses-outline"
                }
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: () => (
              <ProfileAvatar uri="https://s3-alpha-sig.figma.com/img/74e6/f56e/da8a877f6517695c947dc8bea37a2462?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l6SaSba7e3~a5GBkJ53P~l7FfR6LEaluaJXC50Diksaat1J9~7fANSxcuH2A8MGaX6PtxUdLLrd2FWBtFozG8smd3lLjpm3bnkMSkzwbULiRzMArC5NHluPsALpEATRrDfeM7b6o1~gELo0i-IcP7W6WxaLTWGu9ztu7Id2PXWQ-DD8DBTxApmGjtwkFlNbuCJqIR2t9CwzzNiXxKUam59NPTqIqM1ikeMOS-cYJFc4EJAVDrADUZY-Ei7600tk42Dqi8lesYXdSutiEl9y7Na-P4DdG12Eu2h5r9g27zviEwDsxdfXKgQjrbq5bqooqchNGCwe-TIGB3NomJgm18Q__" />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
