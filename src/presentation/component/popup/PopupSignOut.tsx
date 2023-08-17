import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import {
  BACKGROUND_APP,
  BACKGROUND_BUTTON_BLUE,
  BACKGROUND_BUTTON_WHITE,
  BG_MODAL_SIGNIN,
  ICON_CLOSE,
  fontFamily,
} from "@assets";
import { TextView } from "../text";
import { ImageView } from "../image";
import { TextViewBold } from "../textBold";
import { Colors } from "@resources";
import { Button } from "../button";

type Props = {
  onPress: () => void;
  onPressSignOut: () => void;
  onPressCancel: () => void;
};

const _PopupSignOut: React.FC<Props> = (props) => {
  const { onPress, onPressSignOut, onPressCancel } = props;
  return (
    <View style={_styles.centeredView}>
      <View style={_styles.modalView}>
        <Pressable
          style={{ position: "absolute", top: 20, right: 20 }}
          onPress={onPress}
        >
          <Image
            source={{ uri: ICON_CLOSE }}
            style={{ width: 24, height: 24 }}
          />
        </Pressable>

        <ImageView
          uri={BG_MODAL_SIGNIN}
          imageStyle={{
            width: 280,
            height: 200,
            resizeMode: "contain",
          }}
          viewStyle={{
            position: "absolute",
            alignSelf: "center",
          }}
        />
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily.bold,
              fontSize: 18,
              color: Colors.BLUE_TEXT,
            }}
          >
            Bạn có muốn đăng xuất
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.bold,
              fontSize: 18,
              color: Colors.BLUE_TEXT,
            }}
          >
            hay không ?
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            title="Huỷ"
            backgroundImage={BACKGROUND_BUTTON_WHITE}
            stylePressable={{
              width: Dimensions.get("window").width * 0.35,
              alignSelf: "center",
              marginTop: 20,
            }}
            styleText={{ color: Colors.BLUE_TEXT }}
            onPress={onPressCancel}
          />
          <Button
            title="Đăng xuất"
            backgroundImage={BACKGROUND_BUTTON_BLUE}
            stylePressable={{
              width: Dimensions.get("window").width * 0.35,
              alignSelf: "center",
              marginTop: 20,
            }}
            onPress={onPressSignOut}
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
    marginTop: 22,
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
    height: 199,
  },
});

export const PopupSignOut = React.memo(_PopupSignOut);
