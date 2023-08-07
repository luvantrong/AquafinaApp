import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { fontFamily } from "@assets";

interface Props {
  boldTexts: string[];
  text: string;
  styleBold?: StyleProp<TextStyle>;
  styleView?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

const _TextViewBold: React.FC<Props> = (props) => {
  const { boldTexts, text } = props;
  const getTextWithBoldAndUpper = (text: string, boldTexts: string[]) => {
    const regex = new RegExp(`(${boldTexts.join("|")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) => {
      const isBoldAndUpper = boldTexts.includes(part);
      return isBoldAndUpper ? (
        <Text
          key={index}
          style={StyleSheet.flatten([_styles.textBold, props.styleBold])}
        >
          {part}
        </Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };

  return (
    <View style={StyleSheet.flatten([_styles.container, props.styleView])}>
      <Text style={StyleSheet.flatten([_styles.text, props.styleText])}>
        {getTextWithBoldAndUpper(text, boldTexts)}
      </Text>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textBold: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
  },
  text: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
  },
});

export const TextViewBold = React.memo(_TextViewBold);
