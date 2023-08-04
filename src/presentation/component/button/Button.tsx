import {
  ImageBackground,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import React from "react";
import { BACKGROUND_BUTTON_BLUE, fontFamily } from "../../../../assets";
import { Colors } from "../../resource";

export interface ButtonProps {
  title: string;
  stylePressable?: StyleProp<ViewStyle>;
  backgroundImage?: string;
  styleText?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const _Button: React.FC<ButtonProps> = (props) => {
  const { backgroundImage, title, onPress } = props;
  return backgroundImage ? (
    <ImageBackground
      style={StyleSheet.flatten([_styles.container, props.stylePressable])}
      source={{ uri: backgroundImage }}
    >
      <Pressable onPress={onPress}>
        <Text style={StyleSheet.flatten([_styles.styleText, props.styleText])}>
          {title}
        </Text>
      </Pressable>
    </ImageBackground>
  ) : (
    <Pressable
      onPress={onPress}
      style={StyleSheet.flatten([_styles.container, props.stylePressable])}
    >
      <Text style={StyleSheet.flatten([_styles.styleText, props.styleText])}>
        {title}
      </Text>
    </Pressable>
  );
};

const _styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    resizeMode: "cover",
    overflow: "hidden",
  },

  styleText: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: Colors.WHITE,
  },
});

export const Button = React.memo(_Button);
