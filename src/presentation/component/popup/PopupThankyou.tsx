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
  BTN_CONFIRM,
  BUTTON_BD,
  BUTTON_FULL,
  CONTENT,
  IMG_AQUAFINA,
  IMG_HP,
  IMG_OTHER,
  IMG_TK,
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
};

const _PopupThankyou: React.FC<PropsType> = (props) => {
  const { onPress } = props;
  return (
    <View style={_styles.centeredView}>
      <BackgroundModal />
      <View style={_styles.modalView}>
        <Image source={{ uri: IMG_TK }} style={_styles.styleImgTop} />
        <Pressable onPress={onPress}>
          <Image
            source={{ uri: BTN_CONFIRM }}
            style={{
              width: 125,
              height: 125,
              alignSelf: "center",
              paddingBottom: -20,
            }}
          />
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
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    height: "80%",
  },

  styleImgTop: {
    width: "85%",
    height: 400,
    resizeMode: "stretch",
    marginBottom: 20,
    alignSelf: "center",
  },
});

export const PopupThankyou = React.memo(_PopupThankyou);
