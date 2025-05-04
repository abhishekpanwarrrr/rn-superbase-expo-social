import { Button, Text } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <Text style={{ color: "white" }}>Index</Text>
      <Button
        title="Go to welcome page"
        onPress={() => router.push("/welcome")}
      />
    </ScreenWrapper>
  );
};

export default Index;
