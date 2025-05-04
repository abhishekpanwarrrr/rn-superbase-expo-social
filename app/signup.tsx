import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const emailRef = useRef("");
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const onSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Signup", "Please fill all the fields");
      return;
    }
    // Good to go
  };
  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <View>
          <Text style={styles.welcomText}>Let's</Text>
          <Text style={styles.welcomText}>Get started</Text>
        </View>
        <View style={styles.form}>
          <Text
            style={{
              fontSize: hp(1.5),
              color: theme.colors.text,
            }}
          >
            Please enter the details to create an account
          </Text>
          <TextInput
            icon={
              <FontAwesome name="user" color={theme.colors.primary} size={32} />
            }
            placeholder="Enter your full name"
            onChangeText={(value: string) => (nameRef.current = value)}
          />
          <TextInput
            icon={
              <Ionicons name="mail" color={theme.colors.primary} size={32} />
            }
            placeholder="Enter your email"
            onChangeText={(value: string) => (emailRef.current = value)}
          />
          <TextInput
            icon={
              <Ionicons
                name="lock-closed"
                color={theme.colors.primary}
                size={32}
              />
            }
            secuteTextEntry
            placeholder="Enter your email"
            onChangeText={(value: string) => (passwordRef.current = value)}
          />
          <Text style={styles.forgotPassword}>Forgot Password ?</Text>
          <Button title="Register" loading={loading} onPress={onSubmit} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text
              style={[
                styles.footerText,
                { color: theme.colors.primaryDark, fontWeight: "600" },
              ]}
            >
              Log in
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomText: {
    fontSize: hp(4),
    fontWeight: "700",
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "600",
    fontSize: hp(1.6),
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
