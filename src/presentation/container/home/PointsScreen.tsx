import { StyleSheet, Text, View } from "react-native";
import React from "react";

const _PointsScreen = () => {
  return (
    <View>
      <Text>PointsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export const PointsScreen = React.memo(_PointsScreen);
