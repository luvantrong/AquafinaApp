import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import {
  BACKGROUND_BUTTON_BLUE,
  CONTENT,
  ICON_HOME,
  ICON_LOGOUT,
  IMAGE_BOTTOM_LOGIN,
  LOGO_AQUAFINA,
  fontFamily,
} from "../../../../assets";
import { Button, Header, ImageView, TextView } from "../../component";
import { Colors } from "../../resource";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackUser } from "../../navigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type DrawerNavigationProps = DrawerNavigationProp<StackUser>;
type PropsType = NativeStackScreenProps<StackUser, "NotificationSignUp"> & {
  navigation: DrawerNavigationProps;
};
const _NotificationSignUp: React.FC<PropsType> = (props) => {
  const { navigation, route } = props;

  const goToScreenSignIn = () => {
    navigation.navigate("SignIn");
  };

  const showDrawerNavigator = () => {
    navigation.openDrawer();
  };

  return (
    <SafeAreaView>
      <Header
        icon_home={ICON_HOME}
        icon_aquafina={LOGO_AQUAFINA}
        icon_logout={ICON_LOGOUT}
        onPressLeft={showDrawerNavigator}
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
        title="Đăng ký thành công"
        styleContainer={{ marginTop: Dimensions.get("window").height * 0.27 }}
        textStyle={_styles.textSignUp}
      />
      <TextView
        title="Vui lòng đăng nhập để bắt đầu chương trình"
        styleContainer={{ marginTop: 10 }}
        textStyle={_styles.textNotify}
      />
      <Button
        title="Đăng nhập"
        backgroundImage={BACKGROUND_BUTTON_BLUE}
        stylePressable={{ marginTop: Dimensions.get("window").height * 0.34 }}
        onPress={goToScreenSignIn}
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

  textSignUp: {
    textTransform: "none",
  },
  textNotify: {
    fontFamily: fontFamily.medium,
    textTransform: "none",
    fontSize: 14,
    color: Colors.GREY_5,
  },
});

export const NotificationSignUp = React.memo(_NotificationSignUp);
