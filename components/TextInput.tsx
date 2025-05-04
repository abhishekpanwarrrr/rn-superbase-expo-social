import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";

interface TextInputProps {
  containerStyles?: StyleProp<ViewStyle>; // or  for better typing
  inputRef?: React.Ref<RNTextInput>;
  icon?: React.ReactNode;
  [key: string]: any; // To allow other props
}
const TextInput: React.FC<TextInputProps> = ({
  containerStyles,
  inputRef,
  icon,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyles && containerStyles]}>
      {icon && icon}
      <RNTextInput
        style={{ flex: 1 }}
        placeholderTextColor={theme.colors.dark}
        ref={inputRef && inputRef}
        {...props}
      />
    </View>
  );
};

export default TextInput;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp(7.2),
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.colors.text,
    borderWidth: 0.4,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
    paddingHorizontal: 18,
    gap: 12,
  },
});
