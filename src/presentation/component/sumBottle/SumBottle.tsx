import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { SUM_BOTTLE, fontFamily } from "@assets";
import { Colors } from "@resources";

export type SumBottleProps = {
  sumAqua: number;
  sumOther: number;
};

const _SumBottle: React.FC<SumBottleProps> = (props) => {
  const { sumAqua, sumOther } = props;

  const numberAqua = sumAqua.toLocaleString("vi-VN");
  const numberOther = sumOther.toLocaleString("vi-VN");
  return (
    <ImageBackground style={_styles.container} source={{ uri: SUM_BOTTLE }}>
      <View style={StyleSheet.flatten(_styles.viewAquafina)}>
        <Text style={StyleSheet.flatten(_styles.textSum)}>{numberAqua}</Text>
        <Text style={StyleSheet.flatten(_styles.text)}>Chai AQUAFINA</Text>
      </View>

      <View style={StyleSheet.flatten(_styles.viewOther)}>
        <Text style={StyleSheet.flatten(_styles.textSum)}>{numberOther}</Text>
        <Text style={StyleSheet.flatten(_styles.text)}>Chai khác</Text>
      </View>
    </ImageBackground>
  );
};

const _styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 1,
    height: 200,
    resizeMode: "stretch",
  },
  viewAquafina: {
    position: "absolute",
    left: 78,
    bottom: 73,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  viewOther: {
    right: 100,
    bottom: 73,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  textSum: {
    color: Colors.BLUE_400,
    fontFamily: fontFamily.bold,
    fontSize: 14,
  },

  text: {
    color: Colors.BLUE_400,
    fontFamily: fontFamily.bold,
    fontSize: 12,
  },
});

export const SumBottle = React.memo(_SumBottle);
