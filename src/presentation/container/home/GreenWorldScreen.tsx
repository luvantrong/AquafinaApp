import { StyleSheet, Text, View } from "react-native";
import React from "react";

const _GreenWorldScreen = () => {
  return (
    <View>
      <Text>GreenWorldScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export const GreenWorldScreen = React.memo(_GreenWorldScreen);
