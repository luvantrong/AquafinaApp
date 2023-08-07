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
import React from "react";
import {
  Banner,
  Button,
  Header,
  ImageView,
  SliderBanner,
  SumBottle,
  TextPlus,
} from "../../component";
import {
  BANNER_HOME,
  BANNER_HOME_2,
  BANNER_HOME_3,
  BANNER_HOME_4,
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

  const goToScreenHome = () => {
    navigation.navigate("Home");
  };

  const handleToScreen = (screen: any) => {
    switch (screen) {
      case "Thế Giới Xanh":
        navigation.navigate("GreenWorldScreen");
        break;
      case "Quà Tặng Xanh":
        navigation.navigate("PresentScreen");
        break;
      default:
        break;
    }
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
        onPressCenter={goToScreenHome}
      />
      <ScrollView style={{ marginBottom: 55 }}>
        <SliderBanner checkSignIn={true} data={DATA} onPress={handleToScreen} />
        <SumBottle sumAqua={200000} sumOther={100000} />
      </ScrollView>
    </SafeAreaView>
  );
};

const _styles = StyleSheet.create({});

const DATA: Banner[] = [
  {
    id: 1,
    image: BANNER_HOME,
    screen: "Thế Giới Xanh",
  },
  {
    id: 2,
    image: BANNER_HOME_2,
    screen: "Thế Giới Xanh",
  },
  {
    id: 3,
    image: BANNER_HOME_3,
    screen: "Thế Giới Xanh",
  },
  {
    id: 4,
    image: BANNER_HOME_4,
    screen: "Quà Tặng Xanh",
  },
];

export const Home = React.memo(_Home);
