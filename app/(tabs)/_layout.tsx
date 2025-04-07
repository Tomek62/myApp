import { Tabs } from "expo-router";
import React from "react";
import { Easing, Platform, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { TransitionSpecs } from '@react-navigation/bottom-tabs';
import { useColorScheme } from "@/hooks/useColorScheme";
import Svg, { Path } from "react-native-svg";
import { useRouter } from "expo-router";

import GlowingCircle from "@/components/ui/GlowingCircle";
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFCF82",
        headerShown: false,
        tabBarStyle: {
          position: "relative",
          backgroundColor: "white",
          borderTopWidth: 0,
          height: 90,
        },
        tabBarBackground: () => (
          <Svg
            width="100%"
            height="40"
            viewBox="0 0 116 31"
            style={{ position: "absolute", bottom: 90 }}
          >
            <Path
              fill="#FFFFFF"
              d="M116 31C98.545 25.554 95.281 14.893 87.467 9.08S69.054 0 58.004 0 36.354 3.266 28.54 9.08C20.726 14.893 17.455 25.55 0 31h116"
            />
          </Svg>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <TouchableOpacity
              style={{ padding: 8 }}
              onPress={() => router.push("/")}
            >
              <Svg width="32" height="32" fill="none" viewBox="0 0 28 30">
                <Path
                  fill={color}
                  d="m10.437 27.453-.104-4.26a1.977 1.977 0 0 1 1.935-2.019l4.005-.098a2 2 0 0 1 1.417.543c.381.36.602.856.615 1.378l.104 4.261c.008.452.197.883.526 1.196s.77.482 1.225.471l2.733-.066a4.82 4.82 0 0 0 3.37-1.476 4.75 4.75 0 0 0 1.33-3.41l-.298-12.139a3.45 3.45 0 0 0-1.312-2.62l-9.476-7.142a4.32 4.32 0 0 0-5.5.234L2.104 9.798A3.45 3.45 0 0 0 .82 12.482l.297 12.126c.064 2.64 2.273 4.728 4.932 4.663l2.67-.066a1.716 1.716 0 0 0 1.68-1.739z"
                ></Path>
              </Svg>
            </TouchableOpacity>
          ),
          tabBarIconStyle: {
            marginTop: 20,
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "",
          tabBarButton: (props) => (
            <TouchableOpacity
              style={{
                position: "absolute",
                top: -35,
                left: "50%",
                marginLeft: -54,
                height: 109,
                width: 109,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() =>
                router.push({
                  pathname: "/explore",
                  params: { openCamera: "true" },
                })
              }
            >
              <GlowingCircle />
              <IconSymbol
                size={36}
                name="camera"
                color="#FFFFFF"
                style={{ position: "absolute" }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <TouchableOpacity
              style={{ padding: 8 }}
              onPress={() => router.push("/profile")}
            >
              <Svg width="32" height="32" fill="none" viewBox="0 0 33 32">
                <Path
                  fill={color}
                  d="M11.12.349q1.493.09 2.882.609l.093.003a.6.6 0 0 1 .14.097c.346.123.673.26.985.443l.593.287c.234.134.512.378.667.48.155.098.327.2.466.313A9.92 9.92 0 0 1 23.1.707c.999.03 1.992.2 2.93.547 5.785 2.073 7.698 8.546 5.773 14.096a20.15 20.15 0 0 1-4.99 7.469 61 61 0 0 1-10.254 7.55l-.402.227-.404-.267a60.3 60.3 0 0 1-9.846-8.15A20.5 20.5 0 0 1 1.37 14.44C-.252 8.785 2.044 2.438 8.007.682c.463-.144.94-.241 1.417-.289l.19.006a9 9 0 0 1 1.332-.055zM25.072 5.77a1.27 1.27 0 0 0-1.622.744 1.295 1.295 0 0 0 .742 1.652c1.003.41 1.652 1.43 1.62 2.535l-.002.05c-.04.36.058.714.271.99.214.275.542.442.889.485a1.3 1.3 0 0 0 1.286-1.167l.006-.188c.113-2.216-1.17-4.264-3.19-5.1"
                ></Path>
              </Svg>
            </TouchableOpacity>
          ),
          tabBarIconStyle: {
            marginTop: 20,
          }
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: "",
          headerShown: false,
          headerTransparent: true,
          href: null,
          
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "",
          headerShown: false,
          headerTransparent: true,
          href: null,
        }}
      />
    </Tabs>
  );
}
