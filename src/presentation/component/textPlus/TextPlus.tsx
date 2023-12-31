import React from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { fontFamily } from "@assets";

export type TextPlusProps = {
  style?: StyleProp<TextStyle>;
  children: {
    bold: boolean;
    contentStyle?: StyleProp<TextStyle>;
    content: string;
  }[];
};

const _TextPlus: React.FC<TextPlusProps> = (props) => {
  const { children } = props;
  return (
    <Text style={props.style}>
      {children.map((item, index) => (
        <Text
          key={index}
          style={StyleSheet.flatten([
            item.bold ? _styles.boldText : _styles.regularText,
            item.contentStyle,
          ])}
        >
          {item.content}
        </Text>
      ))}
    </Text>
  );
};

const _styles = StyleSheet.create({
  regularText: {
    fontFamily: fontFamily.medium,
    fontSize: 13,
  },
  boldText: {
    fontFamily: fontFamily.bold,
    fontSize: 13,
  },
});

export const TextPlus = React.memo(_TextPlus);
