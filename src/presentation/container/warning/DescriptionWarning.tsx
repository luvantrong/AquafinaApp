import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
  BACKGROUND_BUTTON_BLUE,
  BANNER_HOME,
  BANNER_HOME_2,
  BANNER_HOME_3,
  BANNER_HOME_4,
  ICON_LOGIN,
  ICON_MENU,
  IMAGE_BOTTOM_LOGIN,
  LOGO_AQUAFINA,
  fontFamily,
} from "@assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackHome } from "@navigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "@resources";
import DropDownPicker from "react-native-dropdown-picker";
import { AppContext } from "@shared-state";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<
  StackHome,
  "WarningDescriptionScreen"
> & {
  navigation: DrawerNavigationProps;
};

const _DescriptionWarning: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const {isLoggedIn} = React.useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [currenValue, setCurrenValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: "1. Bỏ chai Aquafinha nhưng hệ thống không nhận diện được",
      value: "Bỏ chai Aquafinha nhưng hệ thống không nhận diện được",
    },
    {
      label: "2. Hệ thống không tích điểm",
      value: "NHệ thống không tích điểm",
    },
    { label: "3. Khác", value: "Khác" },
  ]);

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
      <ImageView
        uri={IMAGE_BOTTOM_LOGIN}
        imageStyle={_styles.imageBottomStyle}
      />
      <Header
        icon_home={ICON_MENU}
        icon_aquafina={LOGO_AQUAFINA}
        checkLogin={isLoggedIn}
        styleIconLogout={{ opacity: 1 }}
        onPressLeft={showDrawerNavigator}
        onPressRight={goToScreenSignIn}
        onPressCenter={goToScreenHome}
      />
      <TextView
        title="Nội dung báo lỗi"
        textStyle={{
          textTransform: "none",
          color: Colors.RED,
          marginTop: 20,
        }}
      />
      <View style={{ marginHorizontal: 20, marginTop: 15 }}>
        <DropDownPicker
          items={items}
          open={isOpen}
          setOpen={() => setIsOpen(!isOpen)}
          value={currenValue}
          setValue={setCurrenValue}
          placeholder="Nội dung báo lỗi"
          placeholderStyle={{
            color: Colors.GRAY_PLA,
            fontFamily: fontFamily.medium,
            fontSize: 14,
          }}
          textStyle={{
            color: Colors.GREY_5,
            fontFamily: fontFamily.medium,
            fontSize: 14,
          }}
          style={{
            borderColor: Colors.BLUE_10,
            opacity: 0.85,
          }}
          dropDownContainerStyle={{
            borderColor: Colors.BLUE_10,
            paddingTop: 10,
          }}
          arrowIconStyle={{
            //@ts-ignore
            tintColor: Colors.BLUE_TEXT,
            width: 24,
            height: 24,
          }}
          setItems={setItems}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 6,
            borderColor: Colors.BLUE_10,
            marginTop: 15,
            backgroundColor: Colors.WHITE,
            fontFamily: fontFamily.medium,
            fontSize: 14,
            paddingStart: 10,
            color: Colors.GREY_5,
            opacity: 0.85,
          }}
          placeholder="Thông tin liên hệ (Email/Số điện thoại)"
          placeholderTextColor={Colors.GRAY_PLA}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 6,
            borderColor: Colors.BLUE_10,
            marginTop: 15,
            backgroundColor: Colors.WHITE,
            fontFamily: fontFamily.medium,
            fontSize: 14,
            paddingStart: 10,
            color: Colors.GREY_5,
            height: 196,
            textAlignVertical: "top",
            opacity: 0.85,
          }}
          placeholder="Mô tả lỗi"
          placeholderTextColor={Colors.GRAY_PLA}
        />
      </View>

      <LinearGradient
        style={{
          marginTop: Dimensions.get("window").height * 0.16,
          height: 250,
        }}
        colors={[Colors.WHITE_LINEAR_2, Colors.WHITE_LINEAR]}
      >
        <Button title="Gửi" backgroundImage={BACKGROUND_BUTTON_BLUE} />
      </LinearGradient>
    </View>
  );
};

const _styles = StyleSheet.create({
  imageBottomStyle: {
    width: Dimensions.get("window").width * 1.2,
    height: Dimensions.get("window").height * 0.6,
    position: "absolute",
    top: Dimensions.get("window").height * 0.515,
  },
});

export const DescriptionWarning = React.memo(_DescriptionWarning);
