import { SafeAreaView, StyleSheet, Dimensions, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { firestore, useAppDispatch } from "@shared-state";
import {
  BACKGROUND_BUTTON_BLUE,
  BACKGROUND_BUTTON_WHITE,
  CONTENT,
  ICON_HOME,
  ICON_LOGOUT,
  ICON_MENU,
  IMAGE_BOTTOM_LOGIN,
  LOGO_AQUAFINA,
  fontFamily,
} from "@assets";
import { Button, Header, ImageView, TextField, TextView } from "@components";
import { Colors } from "@resources";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackHome } from "@navigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import LinearGradient from "react-native-linear-gradient";
import { RootState } from "@shared-state";
import { AppContext } from "@shared-state";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "SignIn"> & {
  navigation: DrawerNavigationProps;
};
const _SignIn: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn } = React.useContext(AppContext);

  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState("");
  const [font, setFont] = useState(fontFamily.medium);

  const goToScreenOTP = async (phoneNumber: string) => {
    if (phoneNumber && !Number.isInteger(Number(phoneNumber))) {
      Alert.alert("Số điện thoại không hợp lệ");
      return;
    }
    if (phoneNumber.length > 10 || phoneNumber.length < 10) {
      Alert.alert("Số điện thoại phải có 10 số");
      return;
    }

    const snapshot = await firestore
      .collection("users")
      .where("phone", "==", phoneNumber)
      .get();
    if (!snapshot.empty) {
      // Số điện thoại đã tồn tại trong Firestore
      navigation.navigate("EnterOTP", { phoneNumber: value, type: true });
    } else {
      // Số điện thoại không tồn tại trong Firestore
      Alert.alert("Tài khoản không tồn tại");
    }
  };

  const handleInputChange = (text: string) => {
    setValue(text);
    if (text) {
      setFont(fontFamily.bold);
    } else {
      setFont(fontFamily.medium);
    }
  };

  const goToScreenSignUp = () => {
    navigation.navigate("SignUp");
  };

  const gotoScreenHome = () => {
    navigation.navigate("Home");
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
        title="Đăng Nhập"
        styleContainer={{ marginTop: Dimensions.get("window").height * 0.21 }}
      />
      <TextField
        title="Số điện thoại"
        placeholder="Nhập số điện thoại của bạn"
        styleView={{ marginTop: 25 }}
        onChange={(value) => handleInputChange(value)}
        value={value}
        textStyle={{ fontFamily: font }}
      />
      <LinearGradient
        style={{
          marginTop: Dimensions.get("window").height * 0.31,
          height: 350,
        }}
        colors={[Colors.WHITE_LINEAR_2, Colors.WHITE_LINEAR]}
      >
        <Button
          title="Đăng nhập"
          backgroundImage={BACKGROUND_BUTTON_BLUE}
          onPress={() => goToScreenOTP(value)}
        />
        <TextView title="Hoặc" textStyle={_styles.textOr} />
        <Button
          title="Đăng ký"
          backgroundImage={BACKGROUND_BUTTON_WHITE}
          styleText={{ color: Colors.BLUE_KV }}
          onPress={goToScreenSignUp}
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
});

export const SignIn = React.memo(_SignIn);
