import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthProvider, useAuth } from "../context/AuthContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    FredokaLight: require('../assets/fonts/Fredoka-Light.ttf'),
    FredokaRegular: require('../assets/fonts/Fredoka-Regular.ttf'),
    FredokaMedium: require('../assets/fonts/Fredoka-Medium.ttf'),
    FredokaSemiBold: require('../assets/fonts/Fredoka-SemiBold.ttf'),
    FredokaBold: require('../assets/fonts/Fredoka-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === "dark" ? DefaultTheme : DarkTheme}>
        <AuthWrapper />
        <StatusBar style="auto"  />
      </ThemeProvider>
    </AuthProvider>
  );
}

function AuthWrapper() {
  const { isAuthenticated } = useAuth();
  const [authState, setAuthState] = useState(isAuthenticated);

  useEffect(() => {
    console.log("🔄 AuthWrapper mis à jour :", isAuthenticated);
    setAuthState(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Stack screenOptions={{gestureEnabled: false, headerShown: false, animation:"fade_from_bottom" }}>
      {authState ? (
        <>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="category" />
          <Stack.Screen name="+not-found" />
        </>
      ) : (
        <>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="signup" options={{ headerShown: false }} />
        </>
      )}
    </Stack>
  );
}
