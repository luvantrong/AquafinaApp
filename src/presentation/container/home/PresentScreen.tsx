import { StyleSheet, Text, View } from "react-native";
import React from "react";

const _PresentScreen = () => {
  return (
    <View>
      <Text>_PresentScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export const PresentScreen = React.memo(_PresentScreen);
