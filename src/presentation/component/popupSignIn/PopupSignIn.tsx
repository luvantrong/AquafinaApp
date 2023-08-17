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
  onPressSignIn: () => void;
};

const _PopupSignIn: React.FC<Props> = (props) => {
  const { onPress, onPressSignIn } = props;
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
          <TextViewBold
            text="Bạn hãy đăng nhập"
            boldTexts={["đăng nhập"]}
            styleText={{
              fontFamily: fontFamily.medium,
              fontSize: 18,
              color: Colors.BLUE_TEXT,
            }}
            styleBold={{
              fontSize: 18,
              color: Colors.BLUE_TEXT,
            }}
            styleView={{
              width: Dimensions.get("window").width * 0.5,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <Text
            style={{
              fontFamily: fontFamily.medium,
              fontSize: 18,
              color: Colors.BLUE_TEXT,
            }}
          >
            để tiếp tục nhé!
          </Text>
        </View>
        <Button
          title="Đăng nhập"
          backgroundImage={BACKGROUND_BUTTON_BLUE}
          stylePressable={{
            width: Dimensions.get("window").width * 0.6,
            alignSelf: "center",
            marginTop: 20,
          }}
          onPress={onPressSignIn}
        />
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
    backgroundColor: "white",
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export const PopupSignIn = React.memo(_PopupSignIn);
