import { StyleSheet, Text, View } from "react-native";
import React from "react";

export interface ScreenProps {}

const _Screen: React.FC<ScreenProps> = ({}) => {
  return (
    <View>
      <Text>Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export const Screen = React.memo(_Screen);
