import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import {
  BACKGROUND_BUTTON_BLUE,
  BACKGROUND_BUTTON_WHITE,
  CONTENT,
  ICON_AQUAFINA,
  ICON_HOME,
  ICON_LOGOUT,
  IMAGE_BOTTOM_LOGIN,
  fontFamily,
} from "../../../../assets";
import {
  Button,
  Header,
  ImageView,
  TextField,
  TextView,
} from "../../component";
import { Colors } from "../../resource";

const _Login = () => {
  const [value, setValue] = useState("");
  const [font, setFont] = useState("Arial");

  const handleInputChange = (text: string) => {
    setValue(text);
    if (text) {
      setFont(fontFamily.bold);
    } else {
      setFont(fontFamily.medium);
    }
  };

  return (
    <SafeAreaView>
      <Header
        icon_home={ICON_HOME}
        icon_aquafina={ICON_AQUAFINA}
        icon_logout={ICON_LOGOUT}
      />
      <ImageView
        uri={CONTENT}
        imageStyle={{
          width: Dimensions.get("window").width * 0.7,
          height: Dimensions.get("window").width * 0.4,
          marginTop: Dimensions.get("window").height * 0.18,
        }}
      />
      <ImageView
        uri={IMAGE_BOTTOM_LOGIN}
        imageStyle={_styles.imageBottomStyle}
      />
      <TextView
        title="Đăng Nhập"
        styleContainer={{ marginTop: Dimensions.get("window").height * 0.21 }}
      />
      <TextField
        title="Số điện thoại"
        placeholder="Nhập số điện thoại của bạn"
        styleView={{ marginTop: 25 }}
        onChange={handleInputChange}
        value={value}
        textStyle={{ fontFamily: font }}
      />
      <Button
        title="Đăng nhập"
        backgroundImage={BACKGROUND_BUTTON_BLUE}
        stylePressable={{ marginTop: Dimensions.get("window").height * 0.31 }}
      />
      <TextView title="Hoặc" textStyle={_styles.textOr} />
      <Button
        title="Đăng ký"
        backgroundImage={BACKGROUND_BUTTON_WHITE}
        styleText={{ color: Colors.BLUE_KV }}
        stylePressable={_styles.shadow}
      />
    </SafeAreaView>
  );
};

const _styles = StyleSheet.create({
  imageBottomStyle: {
    width: Dimensions.get("window").width * 1.2,
    height: Dimensions.get("window").height * 0.6,
    marginTop: Dimensions.get("window").height * 1.48,
    marginStart: Dimensions.get("window").width * 0.05,
  },
  textOr: {
    textTransform: "none",
    color: Colors.GREY_5,
    fontSize: 11,
    marginVertical: 3,
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export const Login = React.memo(_Login);
