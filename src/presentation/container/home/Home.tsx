import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Header, ImageView, TextPlus } from "../../component";
import {
  BANNER_HOME,
  ICON_LOGIN,
  ICON_MENU,
  LOGO_AQUAFINA,
} from "../../../../assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackHome } from "../../navigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Colors } from "../../resource";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "Home"> & {
  navigation: DrawerNavigationProps;
};

const _Home: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const showDrawerNavigator = () => {
    navigation.openDrawer();
  };
  const goToScreenSignIn = () => {
    navigation.navigate("SignIn");
  };
  return (
    <SafeAreaView>
      <Header
        icon_home={ICON_MENU}
        icon_aquafina={LOGO_AQUAFINA}
        icon_logout={ICON_LOGIN}
        styleIconLogout={{ opacity: 1 }}
        onPressLeft={showDrawerNavigator}
        onPressRight={goToScreenSignIn}
      />
      <ImageView
        uri={BANNER_HOME}
        imageStyle={{
          width: Dimensions.get("window").width * 1,
          height: Dimensions.get("window").height * 0.8,
          resizeMode: "stretch",
        }}
        viewStyle={{
          position: "absolute",
          top: Dimensions.get("window").height * 0.08,
        }}
      />
    </SafeAreaView>
  );
};

const _styles = StyleSheet.create({});

export const Home = React.memo(_Home);
