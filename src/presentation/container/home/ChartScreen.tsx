import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Rating, TextView } from "@components";
import { fontFamily } from "@assets";
import { Colors } from "@resources";

const _ChartScreen = () => {
  return (
    <View>
      <Rating checkSignIn={false} />
    </View>
  );
};

const _styles = StyleSheet.create({});

export const ChartScreen = React.memo(_ChartScreen);
