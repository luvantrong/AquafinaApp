import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
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
  TextField,
  TextPlus,
  TextView,
  PopupSignOut,
} from "@components";
import {
  AQUA_BG,
  AVATAR_SIGNIN,
  BANNER_HOME,
  BANNER_HOME_2,
  BANNER_HOME_3,
  BANNER_HOME_4,
  BG_POINT,
  CAMERA,
  ICON_LOGIN,
  ICON_MENU,
  LOGO_AQUAFINA,
  PURE_COIN,
  fontFamily,
} from "@assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackHome } from "@navigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import database from "@react-native-firebase/database";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { Colors } from "@resources";
import { TextInput } from "react-native-gesture-handler";
import { AppContext } from "@shared-state";
import { User } from "@domain";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "Điểm Thưởng Xanh"> & {
  navigation: DrawerNavigationProps;
};

const _PointsScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn, setLoggedIn, setDataUser } = React.useContext(AppContext);
  const [modalVisibleSignOut, setModalVisibleSignOut] = useState(false);

  const showDrawerNavigator = () => {
    navigation.openDrawer();
  };

  const goToScreenSignIn = () => {
    if (isLoggedIn) {
      setModalVisibleSignOut(true);
    } else {
      navigation.navigate("SignIn");
    }
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

  const [name, setName] = useState("Lê Quỳnh Ái Vân");
  const [phone, setPhone] = useState("0943223470");
  const [point, setPoint] = useState(150);

  return (
    <View style={{ paddingBottom: 56 }}>
      <Header
        icon_home={ICON_MENU}
        icon_aquafina={LOGO_AQUAFINA}
        checkLogin={isLoggedIn}
        styleIconLogout={{ opacity: 1 }}
        onPressLeft={showDrawerNavigator}
        onPressRight={goToScreenSignIn}
        onPressCenter={goToScreenHome}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSignOut}
      >
        <PopupSignOut
          onPress={() => {
            setModalVisibleSignOut(!modalVisibleSignOut);
          }}
          onPressSignOut={() => {
            setModalVisibleSignOut(!modalVisibleSignOut);
            setLoggedIn(false);
            setDataUser({} as User);
          }}
          onPressCancel={() => {
            setModalVisibleSignOut(!modalVisibleSignOut);
          }}
        />
      </Modal>
      <ScrollView>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <TextView
            title="Thông tin người chơi"
            textStyle={{
              textTransform: "none",
              fontSize: 18,
              marginBottom: 10,
            }}
          />
          <Image
            source={{ uri: AVATAR_SIGNIN }}
            style={{ width: 94, height: 94, borderRadius: 50 }}
          />

          <Image
            source={{ uri: CAMERA }}
            style={{
              width: 17,
              height: 17,
              position: "absolute",
              left: Dimensions.get("window").width / 2 + 20,
              bottom: 2,
            }}
          />
        </View>

        <View>
          <Text style={_styles.textName}>Họ và tên</Text>
          <TextInput value={name} style={_styles.textInput} />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={_styles.textName}>Số điện thoại</Text>
          <TextInput value={phone} style={_styles.textInput} />
        </View>

        <View>
          <ImageView
            uri={BG_POINT}
            imageStyle={{
              width: Dimensions.get("window").width * 0.8,
              height: Dimensions.get("window").height * 0.3,
              resizeMode: "stretch",
              marginVertical: 30,
            }}
          />
          <TextView
            title="Số Điểm tích luỹ:"
            textStyle={{
              textTransform: "none",
              fontSize: 18,
            }}
            styleContainer={{
              position: "absolute",
              top: 70,
              alignSelf: "center",
            }}
          />
          <TextView
            title={point.toString()}
            textStyle={{
              textTransform: "none",
              fontSize: 60,
              color: Colors.YELLOW,
            }}
            styleContainer={{
              position: "absolute",
              top: 110,
              alignSelf: "center",
            }}
          />
        </View>

        <View style={{ marginVertical: 50 }}>
          <TextView
            title="CẢM ƠN BẠN ĐÃ THAM GIA"
            textStyle={{
              color: Colors.BLUE_TEXT,
              textAlign: "left",
              marginStart: 20,
              fontSize: 14,
            }}
            styleContainer={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          />
          <TextView
            title="CHIẾN DỊCH “SẢI BƯỚC PHONG CÁCH XANH“ CÙNG AQUAFINA"
            textStyle={{
              color: Colors.BLUE_TEXT,
              textAlign: "left",
              marginStart: 20,
              fontSize: 14,
            }}
            styleContainer={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          />
        </View>

        <Image
          source={{ uri: AQUA_BG }}
          style={{
            width: Dimensions.get("window").width * 0.8,
            height: 42,
            resizeMode: "stretch",
          }}
        />

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

const _styles = StyleSheet.create({
  textName: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: Colors.BLACK,
    marginStart: 20,
    marginBottom: 5,
  },

  textInput: {
    marginHorizontal: 20,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: Colors.GREY_GREY,
    borderColor: Colors.GREY_GREY,
    height: 44,
    paddingStart: 18,
  },
});

export const PointsScreen = React.memo(_PointsScreen);
