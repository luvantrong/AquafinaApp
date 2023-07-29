import {
  ImageBackground,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewProps,
} from "react-native";
import React from "react";
import { BACKGROUND_BUTTON_BLUE, fontFamily } from "../../../../assets";
import { Colors } from "../../resource";

export interface ButtonProps {
  title: string;
  stylePressable?: StyleProp<ViewProps>;
  backgroundImage: string;
  styleText?: StyleProp<TextStyle>;
}

const _Button: React.FC<ButtonProps> = (props) => {
  const { backgroundImage, title } = props;
  return (
    <ImageBackground
      style={StyleSheet.flatten([_styles.container, props.stylePressable])}
      source={{ uri: backgroundImage }}
    >
      <Pressable>
        <Text style={StyleSheet.flatten([_styles.styleText, props.styleText])}>
          {title}
        </Text>
      </Pressable>
    </ImageBackground>
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
    fontFamily: fontFamily.medium,
    color: Colors.WHITE,
  },
});

export const Button = React.memo(_Button);
