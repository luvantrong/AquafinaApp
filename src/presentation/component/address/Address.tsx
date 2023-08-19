import { Dimensions, Image, StyleSheet, View } from "react-native";
import React from "react";
import { BACKGROUND_BUTTON_BLUE } from "@assets";
import { Button } from "../button";

type Props = {
  onPress: () => void;
  uri: string;
  check?: boolean;
};

const _Address: React.FC<Props> = (props) => {
  const { onPress, uri, check } = props;
  let title = "Khám phá ngay";
  if (check) {
    title = "Tìm hiểu thêm";
  }
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={{ uri: uri }}
        style={{
          width: Dimensions.get("window").width * 1,
          height: 593,
          resizeMode: "stretch",
        }}
      />
      <Button
        title={title}
        backgroundImage={BACKGROUND_BUTTON_BLUE}
        stylePressable={{
          width: 200,
          position: "absolute",
          bottom: 24,
        }}
        onPress={onPress}
      />
    </View>
  );
};

export const Address = React.memo(_Address);
