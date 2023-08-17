import {
  Dimensions,
  Image,
  ImageBackground,
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
  Button,
  CarouselView,
  Header,
  ImageView,
  MenuFooter,
  Rating,
  SliderBanner,
  SumBottle,
  TextPlus,
  TextView,
} from "@components";
import {
  BANNER_HOME,
  BANNER_HOME_2,
  BANNER_HOME_3,
  BANNER_HOME_4,
  BA_1,
  ICON_LOGIN,
  ICON_LOGOUT,
  ICON_MENU,
  LOGO_AQUAFINA,
  W_2,
  W_3,
  W_4,
  fontFamily,
} from "@assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackHome } from "@navigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import database from "@react-native-firebase/database";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { Colors } from "@resources";
import { AppContext } from "@shared-state";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "Thế Giới Xanh"> & {
  navigation: DrawerNavigationProps;
};

const _GreenWorldScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const {isLoggedIn} = React.useContext(AppContext);

  const showDrawerNavigator = () => {
    navigation.openDrawer();
  };

  const handleLogout = () => {
    // navigation.navigate("SignIn");
    console.log("logout");
  };

  const goToScreenHome = () => {
    navigation.navigate("Home");
  };

  const goToScreenPresent = () => {
    navigation.navigate("Quà Tặng Xanh");
  };

  const goToScreenMap = () => {
    navigation.navigate("Bản Đồ Xanh");
  };

  const goToScreenGreenWorld = () => {
    navigation.navigate("Thế Giới Xanh");
  };

  const goToScreenChart = () => {
    navigation.navigate("Bảng Xếp Hạng");
  };

  const goToScreenPoints = () => {
    navigation.navigate("Điểm Thưởng Xanh");
  };

  const goToScreenDescriptionWarning = () => {
    navigation.navigate("WarningDescriptionScreen");
  };

  const title1 =
    "Tiếp tục hành trình lan tỏa vị ngon của sự tinh khiết và không ngừng truyền cảm hứng về phong cách sống thời thượng. Năm 2022, Aquafina đánh dấu cột mốc mới tiên phong lan tỏa cảm cảm hứng  sống xanh bền vững (Sustainability), thời trang hơn và ý nghĩa hơn đến với giới mộ điệu yêu thích thời trang.\n\nHình ảnh vòng tròn lan tỏa cùng mũi tên mang tính biểu tượng với ý nghĩa cùng Aquafina lan tỏa những hành động tích cực đến môi trường và truyền cảm hứng về phong cách Xanh bền vững.";

  return (
    <View style={{ paddingBottom: 56 }}>
      <Header
        icon_home={ICON_MENU}
        icon_aquafina={LOGO_AQUAFINA}
        checkLogin={isLoggedIn}
        styleIconLogout={{ opacity: 1 }}
        onPressLeft={showDrawerNavigator}
        onPressRight={handleLogout}
        onPressCenter={goToScreenHome}
      />

      <ScrollView>
        <ImageView uri={BANNER_HOME_3} imageStyle={{ height: 600 }} />
        <ImageBackground
          source={{ uri: BA_1 }}
          style={{
            width: "101%",
            marginStart: -4,
            paddingBottom: 8,
            height: 255,
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              backgroundColor: Colors.BACKGROUND_1,
            }}
          >
            <TextView title="Aquafina" styleContainer={{ marginTop: 10 }} />
            <TextView
              title={title1}
              textStyle={{
                color: Colors.BLACK,
                textTransform: "none",
                fontSize: 13,
                fontFamily: fontFamily.medium,
              }}
            />
          </View>
        </ImageBackground>

        <ImageView
          uri={W_2}
          imageStyle={{ height: 600 }}
          viewStyle={{ marginTop: -4 }}
        />
        <TextView
          title="Không chỉ lan tỏa cảm hứng sống Xanh, Aquafina sẽ cùng bạn hành động để mang đến những tác động tích cực đến môi trường.  Lần đầu tiên tự hào giới thiệu, Trạm Tái Sinh của Aquafina – Nơi tái sinh vòng đời mới cho chai nhựa."
          textStyle={{
            color: Colors.BLACK,
            textTransform: "none",
            fontSize: 13,
            fontFamily: fontFamily.medium,
          }}
          styleContainer={{
            backgroundColor: Colors.BACKGROUND_2,
            padding: 20,
          }}
        />
        <ImageView uri={W_3} imageStyle={{ height: 600 }} />
        <ImageView uri={W_4} imageStyle={{ height: 600 }} />
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

const styles = StyleSheet.create({});

export const GreenWorldScreen = React.memo(_GreenWorldScreen);
