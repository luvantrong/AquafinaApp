import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Image,
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
  TextViewBold,
} from "../../component";
import { Colors } from "../../resource";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { stackTest } from "../../navigation";
import OTPInputView from "@twotalltotems/react-native-otp-input";

type propsType = NativeStackScreenProps<stackTest, "EnterOTP">;
const _EnterOTP: React.FC<propsType> = (props) => {
  const { navigation, route } = props;
  const phoneNumber = route.params?.phoneNumber;
  const textBold = "Một mã OTP vừa được gửi vào số " + phoneNumber;
  const phone = phoneNumber + "";
  const boldTexts: string[] = [phone];
  const textRed: string[] = ["30 giây"];
  const [display, setDisplay] = useState<"flex" | "none" | undefined>("flex");
  const [displayReSendOPT, setDisplayReSendOPT] = useState<
    "flex" | "none" | undefined
  >("none");

  const [colorOTP, setColorOTP] = useState<string>(Colors.BLUE_TEXT);
  const [borderColorOTP, setBorderColorOTP] = useState<string>(Colors.GRAY_PLA);

  const codeOTP = "1234";
  const [code, setCode] = useState<string>("");

  const handleCheckOTP = () => {
    if (code != codeOTP) {
      setDisplay("none");
      setColorOTP(Colors.RED);
      setBorderColorOTP(Colors.RED);
      setDisplayReSendOPT("flex");
    }
  };

  const handleResendOTP = () => {
    setDisplay("flex");
    setColorOTP(Colors.BLUE_TEXT);
    setBorderColorOTP(Colors.GRAY_PLA);
    setDisplayReSendOPT("none");
    setCode("");
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
        title="Nhập OTP"
        styleContainer={{ marginTop: Dimensions.get("window").height * 0.21 }}
      />

      <TextViewBold
        text={textBold}
        boldTexts={boldTexts}
        styleView={{ marginTop: 10 }}
      />

      <View style={_styles.viewOTP}>
        <OTPInputView
          style={{ width: "100%", height: 50 }}
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={StyleSheet.flatten([
            _styles.underlineStyleBase,
            { color: colorOTP, borderColor: borderColorOTP },
          ])}
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={(code) => {
            setCode(code);
          }}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
            setCode(code);
          }}
        />
      </View>
      <Button
        title="Xác nhận"
        backgroundImage={BACKGROUND_BUTTON_BLUE}
        stylePressable={{ marginTop: Dimensions.get("window").height * 0.234 }}
        onPress={handleCheckOTP}
      />
      <TextViewBold
        text="Mã sẽ được gửi trong vòng 30 giây"
        boldTexts={textRed}
        styleBold={{ color: "red", textTransform: "uppercase" }}
        styleView={{ marginTop: 12, display: display }}
      />

      <Button
        onPress={handleResendOTP}
        title="Gửi lại mã"
        styleText={StyleSheet.flatten([
          _styles.textReSendOTP,
          { display: displayReSendOPT },
        ])}
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

  viewOTP: {
    marginTop: 20,
    marginHorizontal: Dimensions.get("window").width * 0.2,
    marginBottom: 50,
  },

  underlineStyleBase: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderColor: Colors.GRAY_PLA,
    color: Colors.BLUE_TEXT,
    fontSize: 20,
    fontWeight: "700",
    borderRadius: 8,
  },

  underlineStyleHighLighted: {
    borderColor: "#7F4E1D",
  },

  textReSendOTP: {
    textTransform: "none",
    fontFamily: fontFamily.medium,
    fontSize: 12,
    textDecorationLine: "underline",
    color: Colors.BLUE_KV,
    marginTop: 5,
    display: "none",
  },
});

export const EnterOTP = React.memo(_EnterOTP);