import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import {
  BACKGROUND_BUTTON_BLUE,
  BACKGROUND_ITEM,
  BACKGROUND_WHITE,
  FACEBOOK,
  WARNING,
  YOUTUBE,
  fontFamily,
} from "@assets";
import { Colors } from "@resources";
import LinearGradient from "react-native-linear-gradient";
import { Button } from "../button";
import { TextView } from "../text";

type Props = {
  onPress1: () => void;
  onPress2: () => void;
  onPress3: () => void;
  onPress4: () => void;
  onPress5: () => void;
  onPress6: () => void;
};

const _MenuFooter: React.FC<Props> = (props) => {
  const { onPress1, onPress2, onPress3, onPress4, onPress5, onPress6 } = props;
  return (
    <View
      style={{
        width: Dimensions.get("window").width * 1,
        height: 400,
      }}
    >
      <Image
        source={{ uri: BACKGROUND_ITEM }}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "stretch",
        }}
      />

      <LinearGradient
        style={{
          width: Dimensions.get("window").width * 1,
          position: "absolute",
          top: 0,
          height: 400,
        }}
        colors={[Colors.WHITE_LINEAR_2, Colors.WHITE_LINEAR_2]}
      >
        <Button
          title="Thế Giới Xanh"
          styleText={_styles.styleText}
          stylePressable={_styles.stylePressable}
          onPress={onPress1}
        />
        <Button
          title="Quà Tặng Xanh"
          styleText={_styles.styleText}
          stylePressable={_styles.stylePressable}
          onPress={onPress2}
        />
        <Button
          title="Bản Đồ Xanh"
          styleText={_styles.styleText}
          stylePressable={_styles.stylePressable}
          onPress={onPress3}
        />
        <Button
          title="Điểm Thưởng Xanh"
          styleText={_styles.styleText}
          stylePressable={_styles.stylePressable}
          onPress={onPress4}
        />
        <Button
          title="Bảng Xếp Hạng"
          styleText={_styles.styleText}
          stylePressable={[
            _styles.stylePressable,
            {
              borderBottomColor: Colors.BLUE_200,
              borderBottomWidth: 1,
            },
          ]}
          onPress={onPress5}
        />
        <TextView
          title="AQUAFINA là thương hiệu nước đóng chai của Pepsico-Suntory."
          styleContainer={{ marginHorizontal: 62, marginTop: 20 }}
          textStyle={_styles.styleTextBottom}
        />
        <TextView
          title="Follow us"
          styleContainer={{ marginHorizontal: 62, marginTop: 6 }}
          textStyle={_styles.styleTextBottom}
        />
        <View style={_styles.viewFollow}>
          <Image style={{ width: 24, height: 24 }} source={{ uri: FACEBOOK }} />
          <Image style={{ width: 24, height: 24 }} source={{ uri: YOUTUBE }} />
        </View>

        <Pressable
          style={[
            _styles.viewFollow,
            { width: "100%", justifyContent: "center", marginTop: 18 },
          ]}
          onPress={onPress6}
        >
          <Image style={{ width: 24, height: 24 }} source={{ uri: WARNING }} />
          <Text
            style={{
              color: Colors.RED,
              fontSize: 14,
              marginStart: 5,
              fontFamily: fontFamily.medium,
            }}
          >
            Báo Lỗi
          </Text>
        </Pressable>
        <TextView
          title="Copyright © 2022 Aquafina Vietnam"
          textStyle={[
            _styles.styleTextBottom,
            { marginTop: 20, fontFamily: fontFamily.medium },
          ]}
        />
      </LinearGradient>
    </View>
  );
};

const _styles = StyleSheet.create({
  stylePressable: {
    marginHorizontal: 0,
    height: 44,
    borderTopColor: Colors.BLUE_200,
    borderTopWidth: 1,
    borderRadius: 0,
  },
  styleText: {
    color: Colors.BLUE_400,
    fontFamily: fontFamily.bold,
    fontSize: 14,
  },

  styleTextBottom: {
    color: Colors.BLUE_400,
    fontSize: 10,
    textTransform: "none",
    textAlign: "center",
  },
  viewFollow: {
    flexDirection: "row",
    alignItems: "center",
    width: 60,
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
});

export const MenuFooter = React.memo(_MenuFooter);
