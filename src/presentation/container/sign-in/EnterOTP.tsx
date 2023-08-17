import { SafeAreaView, StyleSheet, Dimensions, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  AVATAR_SIGNIN,
  AVT,
  BACKGROUND_BUTTON_BLUE,
  CONTENT,
  ICON_AVATAR,
  ICON_HOME,
  ICON_LOGOUT,
  ICON_MENU,
  IMAGE_BOTTOM_LOGIN,
  LOGO_AQUAFINA,
  fontFamily,
} from "@assets";
import { Button, Header, ImageView, TextView, TextViewBold } from "@components";
import { Colors } from "@resources";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackHome } from "@navigation";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import LinearGradient from "react-native-linear-gradient";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { firestore, signUp, useAppDispatch } from "@shared-state";
import { RootState } from "@shared-state";
import { User } from "@domain";
import { AppContext } from "@shared-state";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "EnterOTP"> & {
  navigation: DrawerNavigationProps;
};

const _EnterOTP: React.FC<PropsType> = (props) => {
  const { navigation, route } = props;
  const { setLoggedIn, setDataUser, isLoggedIn } = React.useContext(AppContext);
  const phoneNumber = route.params?.phoneNumber;
  const name = route.params?.name;
  const type = route.params?.type;
  const dispatch = useAppDispatch();
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

  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  function onAuthStateChanged(user: any) {
    console.log("user", user);
  }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  async function signInWithPhoneNumber(phoneNumber: string) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  useEffect(() => {
    // signInWithPhoneNumber("+84943223470");
  }, []);

  async function confirmCode() {
    try {
      await confirm?.confirm(code);
    } catch (error) {
      console.log("Invalid code.");
      // return false;
    }
  }

  const gotoScreenHome = () => {
    navigation.navigate("Home");
  };

  const getDataUser = async () => {
    try {
      const snapshot = await firestore
        .collection("users")
        .where("phone", "==", phone)
        .get();
      if (!snapshot.empty) {
        const userDoc = snapshot.docs[0];
        const user = userDoc.data();
        const key = userDoc.id;
        const userWithKey: User = {
          key: key,
          name: user.name,
          phone: user.phone,
          avatar: user.avatar,
        };
        setDataUser(userWithKey);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckOTP = () => {
    if (code != codeOTP) {
      setDisplay("none");
      setColorOTP(Colors.RED);
      setBorderColorOTP(Colors.RED);
      setDisplayReSendOPT("flex");
      return false;
    }
    // confirmCode();
    getDataUser();

    if (type == true) {
      setLoggedIn(true);
      navigation.navigate("Home");
    } else if (type == false) {
      const user: Omit<User, "key"> = {
        name: name,
        phone: phoneNumber,
        avatar: ICON_AVATAR,
      };
      dispatch(signUp(user));
      navigation.navigate("NotificationSignUp");
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
        checkLogin={isLoggedIn}
        onPressLeft={gotoScreenHome}
        styleIconAquafina={{ width: 75, height: 25 }}
      />
      <ImageView
        uri={CONTENT}
        imageStyle={{
          width: Dimensions.get("window").width * 0.8,
          height: Dimensions.get("window").width * 0.5,
          marginTop: Dimensions.get("window").height * 0.14,
          marginEnd: Dimensions.get("window").width * 0.04,
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
            // console.log(`Code is ${code}, you are good to go!`);
            setCode(code);
          }}
          placeholderCharacter="|"
          placeholderTextColor={Colors.GRAY_PLA}
          editable={true}
        />
      </View>
      <LinearGradient
        style={{
          marginTop: Dimensions.get("window").height * 0.234,
          height: 400,
        }}
        colors={[Colors.WHITE_LINEAR_2, Colors.WHITE_LINEAR]}
      >
        <Button
          title="Xác nhận"
          backgroundImage={BACKGROUND_BUTTON_BLUE}
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
      </LinearGradient>
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
