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
  LOGO_AQUAFINA,
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
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { stackTest } from "../../navigation";
type propsType = NativeStackScreenProps<stackTest, "SignUp">;
const _SignUp: React.FC<propsType> = (props) => {
  const { navigation } = props;

  const [valueName, setValueName] = useState("");
  const [valuePhone, setValuePhone] = useState("");
  const [fontName, setFontName] = useState(fontFamily.medium);
  const [fontPhone, setFontPhone] = useState(fontFamily.medium);

  const handleInputChangeName = (text: string) => {
    setValueName(text);
    if (text) {
      setFontName(fontFamily.bold);
    } else {
      setFontName(fontFamily.medium);
    }
  };

  const handleInputChangePhone = (text: string) => {
    setValuePhone(text);
    if (text) {
      setFontPhone(fontFamily.bold);
    } else {
      setFontPhone(fontFamily.medium);
    }
  };

  const goToScreenOTP = () => {
    navigation.navigate("EnterOTP", { phoneNumber: valuePhone });
  };

  return (
    <SafeAreaView>
      <Header
        icon_home={ICON_HOME}
        icon_aquafina={LOGO_AQUAFINA}
        icon_logout={ICON_LOGOUT}
      />
      <ImageView
        uri={CONTENT}
        imageStyle={{
          width: Dimensions.get("window").width * 0.8,
          height: Dimensions.get("window").width * 0.5,
          marginTop: Dimensions.get("window").height * 0.14,
        }}
      />
      <ImageView
        uri={IMAGE_BOTTOM_LOGIN}
        imageStyle={_styles.imageBottomStyle}
      />
      <TextView
        title="Đăng Ký"
        styleContainer={{ marginTop: Dimensions.get("window").height * 0.21 }}
      />
      <TextField
        title="Họ và tên"
        placeholder="Nhập họ và tên của bạn"
        styleView={{ marginTop: 25 }}
        value={valueName}
        textStyle={{ fontFamily: fontName }}
        onChange={handleInputChangeName}
      />
      <TextField
        title="Số điện thoại"
        placeholder="Nhập số điện thoại của bạn"
        styleView={{ marginTop: 10 }}
        value={valuePhone}
        textStyle={{ fontFamily: fontPhone }}
        onChange={handleInputChangePhone}
      />
      <Button
        title="Đăng ký"
        backgroundImage={BACKGROUND_BUTTON_BLUE}
        stylePressable={{ marginTop: Dimensions.get("window").height * 0.21 }}
        onPress={goToScreenOTP}
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

export const SignUp = React.memo(_SignUp);
