import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "@/helpers/common";
import { theme } from "@/constants/theme";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.welcomeImage}
          source={require("@/assets/images/welcome.png")}
        />
        {/* Title  */}
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>Linkup!</Text>
          <Text style={styles.punchLine}>
            Where every thought finds a home and a story.
          </Text>
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Button
            title="Getting started"
            onPress={() => router.push("/signup")}
            buttonStyle={{ marginHorizontal: wp(3) }}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>Already have an account ?</Text>
            <Pressable onPress={() => router.push("/login")}>
              <Text
                style={[
                  styles.loginText,
                  { color: theme.colors.primaryDark, fontWeight: "700" },
                ]}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    marginHorizontal: wp(4),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: "center",
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: "800",
  },
  punchLine: {
    textAlign: "center",
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text,
  },
  footer: {
    gap: 30,
    width: "100%",
  },
  bottomTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  loginText: {
    fontSize: hp(1.6),
    color: theme.colors.text,
    textAlign: "center",
  },
});
