import { StyleSheet, Text, View } from "react-native";
import React from "react";

const _InstructRVM = () => {
  return (
    <View>
      <Text>InstrucRVM</Text>
    </View>
  );
};

const _styles = StyleSheet.create({});

export const InstructRVM = React.memo(_InstructRVM);
