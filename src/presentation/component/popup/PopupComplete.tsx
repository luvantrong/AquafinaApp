import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import {
  BACKGROUND_BUTTON_BLUE,
  BACKGROUND_BUTTON_WHITE,
  BG_MODAL_TIMEUP,
  BG_STATIS_1,
  BG_TD,
  BUTTON_BD,
  BUTTON_FULL,
  IMG_AQUAFINA,
  IMG_HP,
  IMG_OTHER,
  LOGO_STRUCT,
  fontFamily,
} from "@assets";
import { TextView } from "../text";
import { ImageView } from "../image";
import { TextViewBold } from "../textBold";
import { Colors } from "@resources";
import { Button } from "../button";
import { BackgroundModal } from "../backgroundModal";

type PropsType = {
  onPress: () => void;
  onPressPlus: () => void;
};

const _PopupComplete: React.FC<PropsType> = (props) => {
  const { onPress, onPressPlus } = props;
  return (
    <View style={_styles.centeredView}>
      <BackgroundModal />
      <View style={_styles.modalView}>
        <View
          style={{
            width: "100%",
            borderRadius: 20,
            backgroundColor: Colors.WHITE,
            marginBottom: 30,
            paddingBottom: 10,
          }}
        >
          <Image
            source={{ uri: BG_TD }}
            style={{
              width: "100%",
              height: "105%",
              position: "absolute",
              resizeMode: "stretch",
              borderRadius: 20,
              overflow: "hidden",
              bottom: 0,
            }}
          />
          <TextView
            title="Bạn có muốn tích điểm đổi quà không?"
            textStyle={{
              textTransform: "none",
              fontSize: 23,
              textAlign: "center",
            }}
            styleContainer={{ paddingHorizontal: 30, marginTop: 20 }}
          />

          <TextView
            title="Bật camera trên điện thoại để quét QR code
            "
            textStyle={{
              textTransform: "none",
              fontSize: 12,
              textAlign: "center",
              color: Colors.GREY_5,
              fontFamily: fontFamily.medium,
            }}
            styleContainer={{ paddingHorizontal: 90 }}
          />
          <Pressable
            onPress={onPress}
            style={{ alignSelf: "center", marginTop: 10 }}
          >
            <Image
              source={{ uri: BUTTON_FULL }}
              style={{ width: 125, height: 125 }}
            />
          </Pressable>
        </View>
        <Pressable onPress={onPressPlus}>
          <ImageBackground
            source={{ uri: BUTTON_BD }}
            style={{
              width: 70,
              height: 70,
              alignSelf: "center",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: fontFamily.bold,
                fontSize: 14,
                color: Colors.BLUE_TEXT,
              }}
            >
              KHÔNG
            </Text>
          </ImageBackground>
        </Pressable>
      </View>
    </View>
  );
};

const _styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "transparent",
    borderRadius: 20,
  },
});

export const PopupComplete = React.memo(_PopupComplete);
