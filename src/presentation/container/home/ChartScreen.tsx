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
  TextPlus,
  PopupSignOut,
  PopupSignIn,
} from "@components";
import {
  AVATAR_1,
  AVATAR_2,
  AVATAR_3,
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
import { AppContext } from "@shared-state";
import { User } from "@domain";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "Bảng Xếp Hạng"> & {
  navigation: DrawerNavigationProps;
};

const _ChartScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;

  const { isLoggedIn, dataUser, setDataUser, setLoggedIn } =
    React.useContext(AppContext);
  const [modalVisibleSignOut, setModalVisibleSignOut] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const scrollViewRef = React.useRef<ScrollView>(null);

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }, []);

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

  const hideModalSignOut = () => {
    setModalVisibleSignOut(!modalVisibleSignOut);
  };

  const goToScreenHome = () => {
    navigation.navigate("Home");
    scrollToTop();
  };

  const goToScreenPresent = () => {
    navigation.navigate("Quà Tặng Xanh");
    scrollToTop();
  };

  const goToScreenMap = () => {
    navigation.navigate("Bản Đồ Xanh");
    scrollToTop();
  };

  const goToScreenGreenWorld = () => {
    navigation.navigate("Thế Giới Xanh");
    scrollToTop();
  };

  const goToScreenChart = () => {
    if (isLoggedIn) {
      navigation.navigate("Bảng Xếp Hạng");
      scrollToTop();
    } else {
    }
  };

  const goToScreenPoints = () => {
    navigation.navigate("Điểm Thưởng Xanh");
    scrollToTop();
  };

  const goToScreenDescriptionWarning = () => {
    navigation.navigate("WarningDescriptionScreen");
    scrollToTop();
  };
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
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <PopupSignIn
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          onPressSignIn={() => {
            setModalVisible(!modalVisible);
            props.navigation.navigate("SignIn");
          }}
        />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSignOut}
      ></Modal>
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
            hideModalSignOut();
            setLoggedIn(false);
            setDataUser({} as User);
            navigation.navigate("Home");
          }}
          onPressCancel={() => {
            setModalVisibleSignOut(!modalVisibleSignOut);
          }}
        />
      </Modal>
      <ScrollView>
        <Rating
          checkSignIn={true}
          data={DATA}
          containerStyle={{ marginTop: 10 }}
          type={false}
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

const _styles = StyleSheet.create({});

export const ChartScreen = React.memo(_ChartScreen);

const DATA: User[] = [
  {
    key: "1",
    avatar: AVATAR_1,
    name: "Nguyễn Văn A",
    point: 1000,
    phone: "0123456789",
  },
  {
    key: "2",
    avatar: AVATAR_1,
    name: "Nguyễn  B",
    point: 999,
    phone: "0123456789",
  },
  {
    key: "3",
    avatar: AVATAR_1,
    name: "Nguyễn Văn C",
    point: 500,
    phone: "0123456789",
  },
  {
    key: "4",
    avatar: AVATAR_2,
    name: "Nguyễn Văn D",
    point: 450,
    phone: "0123456789",
  },
  {
    key: "5",
    avatar: AVATAR_3,
    name: "Nguyễn Văn E",
    point: 200,
    phone: "0123456789",
  },
];
