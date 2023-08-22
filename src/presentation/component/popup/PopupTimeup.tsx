import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import {
  BACKGROUND_BUTTON_BLUE,
  BACKGROUND_BUTTON_WHITE,
  BG_MODAL_TIMEUP,
  BG_STATIS_1,
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

const _PopupTimeup: React.FC<PropsType> = (props) => {
  const { onPress, onPressPlus } = props;
  return (
    <View style={_styles.centeredView}>
      <BackgroundModal />
      <View style={_styles.modalView}>
        <Image
          source={{ uri: BG_MODAL_TIMEUP }}
          style={{
            width: "114%",
            height: "114%",
            resizeMode: "stretch",
            position: "absolute",
            alignSelf: "center",
            borderRadius: 20,
            overflow: "hidden",
          }}
        />

        <Image
          source={{ uri: LOGO_STRUCT }}
          style={{
            width: 88,
            height: 73,
            alignSelf: "center",
            marginTop: -18,
            marginBottom: 10,
          }}
        />
        <TextView title="cảnh báo hết thời gian" />

        <TextView
          title="Thời gian thực hiện quy trình đã kết thúc, bạn có cần thêm thời gian không?"
          textStyle={{
            textTransform: "none",
            color: Colors.GREY_5,
            fontSize: 15,
            marginVertical: 10,
            textAlign: "center",
            lineHeight: 20,
            height: 45,
          }}
        />
        <TextViewBold
          text="Trở về màn hình chính sau: 10 GIÂY NỮA"
          boldTexts={["10 GIÂY NỮA"]}
          styleText={{
            fontFamily: fontFamily.bold,
            textAlign: "center",
            fontSize: 15,
          }}
          styleBold={{ color: Colors.RED }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Button
            backgroundImage={BACKGROUND_BUTTON_WHITE}
            title="MÀN HÌNH CHÍNH"
            styleText={{ color: Colors.BLUE_TEXT, fontSize: 12 }}
            stylePressable={{
              paddingHorizontal: 15,
              height: 45,
              marginTop: 30,
              marginEnd: 10,
            }}
            onPress={onPress}
          />
          <Button
            backgroundImage={BACKGROUND_BUTTON_BLUE}
            title="THÊM THỜI GIAN"
            styleText={{ fontSize: 12 }}
            stylePressable={{
              paddingHorizontal: 15,
              height: 45,
              marginTop: 30,
              marginStart: 10,
            }}
            onPress={onPressPlus}
          />
        </View>
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
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 329,
    marginHorizontal: 20,
  },
});

export const PopupTimeup = React.memo(_PopupTimeup);
