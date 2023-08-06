import { StyleSheet, Text, View } from "react-native";
import React from "react";

const _ChartScreen = () => {
  return (
    <View>
      <Text>ChartScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export const ChartScreen = React.memo(_ChartScreen);
