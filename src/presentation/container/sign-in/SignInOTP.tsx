import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
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
  TextViewBold,
} from "../../component";
import { Colors } from "../../resource";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { stackTest } from "../../navigation";

type propsType = NativeStackScreenProps<stackTest, "SignInOTP">;
const _SignInOTP: React.FC<propsType> = (props) => {
  const { navigation, route } = props;
  const phoneNumber = route.params?.phoneNumber;
  const textBold = "Một mã OTP vừa được gửi vào số " + phoneNumber;
  const searchString = ["Một"];
  const [value, setValue] = useState("");
  const [font, setFont] = useState(fontFamily.medium);

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
        title="Nhập OTP"
        styleContainer={{ marginTop: Dimensions.get("window").height * 0.21 }}
      />

      <TextViewBold
        text={textBold}
        searchStrings={searchString}
        boldStyle={{ fontFamily: fontFamily.bold }}
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

export const SignInOTP = React.memo(_SignInOTP);
