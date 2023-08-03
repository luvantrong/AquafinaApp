import { SafeAreaView, StyleSheet, Dimensions, View } from "react-native";
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
import OTPInputView from "@twotalltotems/react-native-otp-input";

type propsType = NativeStackScreenProps<stackTest, "SignInOTP">;
const _SignInOTP: React.FC<propsType> = (props) => {
  const { navigation, route } = props;
  const phoneNumber = route.params?.phoneNumber;
  const textBold = "Một mã OTP vừa được gửi vào số " + phoneNumber;
  const phone = phoneNumber + "";
  const boldTexts: string[] = [phone];
  const textRed: string[] = ["30 giây"];

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
        boldTexts={boldTexts}
        styleView={{ marginTop: 10 }}
      />

      <View style={_styles.viewOTP}>
        <OTPInputView
          style={{ width: "100%", height: 50 }}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={_styles.underlineStyleBase}
          // codeInputHighlightStyle={_styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
      </View>
      <Button
        title="Xác nhận"
        backgroundImage={BACKGROUND_BUTTON_BLUE}
        stylePressable={{ marginTop: Dimensions.get("window").height * 0.234 }}
      />
      <TextViewBold
        text="Mã sẽ được gửi trong vòng 30 giây"
        boldTexts={textRed}
        styleBold={{ color: "red", textTransform: "uppercase" }}
        styleView={{ marginTop: 6 }}
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
});

export const SignInOTP = React.memo(_SignInOTP);
