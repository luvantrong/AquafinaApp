import { StyleSheet, Text, View } from "react-native";
import React from "react";

const _MapScreen = () => {
  return (
    <View>
      <Text>MapScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export const MapScreen = React.memo(_MapScreen);
