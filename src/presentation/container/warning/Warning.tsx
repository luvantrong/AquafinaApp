import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackHome } from "@navigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  BACKGROUND_BUTTON_BLUE,
  ICON_LOGIN,
  ICON_MENU,
  LOGO_AQUAFINA,
  WARNING_2,
  fontFamily,
} from "@assets";
import { Button, Header, ImageView, TextView } from "@components";
import { Colors } from "@resources";
import { AppContext } from "@shared-state";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "WarningScreen"> & {
  navigation: DrawerNavigationProps;
};

const _Warning: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn} = React.useContext(AppContext);

  const showDrawerNavigator = () => {
    navigation.openDrawer();
  };

  const goToScreenSignIn = () => {
    navigation.navigate("SignIn");
  };

  const goToScreenHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View>
      <Header
        icon_home={ICON_MENU}
        icon_aquafina={LOGO_AQUAFINA}
        checkLogin={isLoggedIn}
        styleIconLogout={{ opacity: 1 }}
        onPressLeft={showDrawerNavigator}
        onPressRight={goToScreenSignIn}
        onPressCenter={goToScreenHome}
      />
      <ImageView
        uri={WARNING_2}
        viewStyle={{ marginTop: Dimensions.get("window").width * 0.5 }}
        imageStyle={{
          width: Dimensions.get("window").width * 0.6,
          height: Dimensions.get("window").height * 0.4,
          resizeMode: "stretch",
        }}
      />

      <TextView
        title="Đã xảy ra lỗi trong quá trình kết nối,
Vui lòng kiểm tra và thử lại sau!"
        textStyle={_styles.textStyle}
      />
      <Button
        title="Thử lại"
        backgroundImage={BACKGROUND_BUTTON_BLUE}
        stylePressable={{
          width: 190,
          alignSelf: "center",
          marginTop: Dimensions.get("window").width * 0.2,
        }}
      />
    </View>
  );
};

const _styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    textTransform: "none",
    marginTop: Dimensions.get("window").width * 0.5,
    color: Colors.GREY_5,
    fontSize: 14,
    fontFamily: fontFamily.medium,
    lineHeight: 20,
  },
});

export const Warning = React.memo(_Warning);
