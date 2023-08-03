import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";
import { fontFamily } from "../../../../assets";
import { Colors } from "../../resource";

export interface TextFieldProps {
  title: string;
  placeholder: string;
  styleView?: StyleProp<ViewStyle>;
  onChange: (text: string) => void;
  textStyle?: StyleProp<TextStyle>;
  value: string;
}

const _TextField: React.FC<TextFieldProps> = (props) => {
  const { title, placeholder, onChange, value } = props;
  return (
    <View style={[{ marginHorizontal: 20 }, props.styleView]}>
      <Text style={_styles.styleText}>{title}</Text>
      <TextInput
        style={StyleSheet.flatten([_styles.styleTextInput, props.textStyle])}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};

const _styles = StyleSheet.create({
  styleText: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    color: Colors.BLUE_TEXT,
    marginBottom: 5,
  },

  styleTextInput: {
    borderWidth: 1,
    borderColor: Colors.BLUE_10,
    height: 40,
    borderRadius: 8,
    paddingStart: 16,
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: Colors.GRAY_PLA,
  },
});

export const TextField = React.memo(_TextField);
