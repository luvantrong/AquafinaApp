import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Address,
  Banner,
  Button,
  CarouselView,
  Header,
  ImageView,
  MenuFooter,
  Rating,
  SliderBanner,
  SumBottle,
  TextPlus,
} from "@components";
import {
  BANNER_HOME,
  BANNER_HOME_2,
  BANNER_HOME_3,
  BANNER_HOME_4,
  ICON_LOGIN,
  ICON_MENU,
  LOGO_AQUAFINA,
  PURE_COIN,
} from "@assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackHome } from "@navigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import database from "@react-native-firebase/database";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "ChartScreen"> & {
  navigation: DrawerNavigationProps;
};

const _ChartScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;

  const showDrawerNavigator = () => {
    navigation.openDrawer();
  };

  const goToScreenSignIn = () => {
    navigation.navigate("SignIn");
  };

  const goToScreenHome = () => {
    navigation.navigate("Home");
  };

  const goToScreenPresent = () => {
    navigation.navigate("PresentScreen");
  };

  const goToScreenMap = () => {
    navigation.navigate("MapScreen");
  };

  const goToScreenGreenWorld = () => {
    navigation.navigate("GreenWorldScreen");
  };

  const goToScreenChart = () => {
    navigation.navigate("ChartScreen");
  };

  const goToScreenPoints = () => {
    navigation.navigate("PointsScreen");
  };

  const goToScreenDescriptionWarning = () => {
    navigation.navigate("WarningDescriptionScreen");
  };
  return (
    <View style={{ paddingBottom: 56 }}>
      <Header
        icon_home={ICON_MENU}
        icon_aquafina={LOGO_AQUAFINA}
        icon_logout={ICON_LOGIN}
        styleIconLogout={{ opacity: 1 }}
        onPressLeft={showDrawerNavigator}
        onPressRight={goToScreenSignIn}
        onPressCenter={goToScreenHome}
      />
      <ScrollView>
        <Rating checkSignIn={true} containerStyle={{ marginTop: 10 }} />
        <MenuFooter
          onPress1={goToScreenGreenWorld}
          onPress2={goToScreenPresent}
          onPress3={goToScreenMap}
          onPress4={goToScreenPoints}
          onPress5={goToScreenChart}
          onPress6={goToScreenDescriptionWarning}
        />
      </ScrollView>
    </View>
  );
};

const _styles = StyleSheet.create({});

export const ChartScreen = React.memo(_ChartScreen);
