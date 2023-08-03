import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";

interface TextViewBoldProps {
  text: string;
  searchStrings: string[];
  boldStyle?: StyleProp<TextStyle>;
}

const _TextViewBold: React.FC<TextViewBoldProps> = (props) => {
  const { text, searchStrings, boldStyle } = props;
  const boldText = (text: string, searchString: string): React.ReactNode[] => {
    const parts = text.split(new RegExp(`(${searchString})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === searchString.toLowerCase() ? (
        <Text key={i} style={boldStyle}>
          {part}
        </Text>
      ) : (
        <Text key={i}>{part}</Text>
      )
    );
  };

  const boldAllStrings = (
    text: string,
    searchStrings: string[]
  ): React.ReactNode => {
    if (searchStrings.length === 0) {
      return <Text>{text}</Text>;
    }
    const searchString = searchStrings[0];
    const parts = text.split(new RegExp(`(${searchString})`, "gi"));
    return (
      <Text>
        {parts.map((part, i) => {
          if (part.toLowerCase() === searchString.toLowerCase()) {
            return boldAllStrings(part, searchStrings.slice(1));
          } else {
            return <Text key={i}>{part}</Text>;
          }
        })}
      </Text>
    );
  };

  return boldAllStrings(
    text,
    searchStrings.map((s) => s.trim())
  );
};

const styles = StyleSheet.create({});

export const TextViewBold = React.memo(_TextViewBold);
