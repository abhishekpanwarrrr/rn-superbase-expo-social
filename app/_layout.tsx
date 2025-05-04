import { theme } from "@/constants/theme";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen
          name="login"
          options={{
            headerBackTitle: "Back",
            headerTitle: "",
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            headerBackTitle: "Back",
            headerTitle: "",
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
      </Stack>
      <StatusBar style="inverted" />
    </ThemeProvider>
  );
}
