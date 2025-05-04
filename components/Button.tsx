import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from "react-native";
import React, { FC } from "react";
import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";

interface ButtonProps {
  buttonStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  title: string;
  hasShadow?: boolean;
}
const Button: FC<ButtonProps> = ({
  buttonStyle,
  onPress,
  textStyle,
  loading = false,
  hasShadow = true,
  title = "Click me",
}) => {
  const shadowStyles = {
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  };
  return (
    <Pressable
      disabled={loading}
      onPress={onPress}
      style={[styles.button, buttonStyle, hasShadow && shadowStyles]}
    >
      {loading ? (
        <ActivityIndicator color={"white"} size={"small"} />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    height: hp(6.6),
    justifyContent: "center",
    alignItems: "center",
    borderCurve: "continuous",
    borderRadius: theme.radius.lg,
  },
  text: {
    fontWeight: "600",
    color: "white",
    fontSize: hp(2.5),
  },
});
