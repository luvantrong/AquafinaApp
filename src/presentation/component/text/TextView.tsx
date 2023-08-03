import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";
import { fontFamily } from "../../../../assets";
import { Colors } from "../../resource";

export interface TextViewProps {
  styleContainer?: StyleProp<ViewStyle>;
  title: string;
  textStyle?: StyleProp<TextStyle>;
}

const _TextView: React.FC<TextViewProps> = (props) => {
  const { title } = props;
  return (
    <View style={StyleSheet.flatten([_styles.container, props.styleContainer])}>
      <Text style={StyleSheet.flatten([_styles.textStyle, props.textStyle])}>
        {title}
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

  textStyle: {
    fontFamily: fontFamily.bold,
    textTransform: "uppercase",
    color: Colors.BLUE_TEXT,
    fontSize: 22,
  },
});
export const TextView = React.memo(_TextView);
