import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import {
  Address,
  Button,
  CarouselView,
  Header,
  ImageView,
  Loading,
  MenuFooter,
  PopupSignOut,
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
import {
  RootState,
  firestore,
  getAllBanner,
  useAppDispatch,
} from "@shared-state";
import { useSelector } from "react-redux";
import { AppContext } from "@shared-state";
import { Banner, User } from "@domain";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "Home"> & {
  navigation: DrawerNavigationProps;
};

const _Home: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn, dataUser, setDataUser, setLoggedIn } =
    useContext(AppContext);
  const [modalVisibleSignOut, setModalVisibleSignOut] = useState(false);
  const dispatch = useAppDispatch();
  const banners: Banner[] = useSelector<RootState, Banner[]>(
    (state) => state.banner.banners
  );

  const loadingBanner = useSelector<RootState, boolean>(
    (state) => state.banner.loading
  );

  interface Rating {
    key: number;
    name: string;
    places: number;
  }

  useEffect(() => {
    dispatch(getAllBanner());
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

  const handleToScreen = (screen: any) => {
    switch (screen) {
      case "Thế Giới Xanh":
        navigation.navigate("Thế Giới Xanh");
        break;
      case "Quà Tặng Xanh":
        navigation.navigate("Quà Tặng Xanh");
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
            hideModalSignOut();
            setLoggedIn(false);
            setDataUser({} as User);
          }}
          onPressCancel={() => {
            setModalVisibleSignOut(!modalVisibleSignOut);
          }}
        />
      </Modal>
      <ScrollView
        style={{ marginBottom: 55 }}
        showsVerticalScrollIndicator={false}
      >
        {loadingBanner ? (
          <Loading height={600} />
        ) : (
          <SliderBanner
            checkSignIn={isLoggedIn}
            data={banners}
            onPress={handleToScreen}
          />
        )}

        <SumBottle sumAqua={200000} sumOther={100000} />
        <View style={{ marginTop: -10 }}>
          <Rating checkSignIn={isLoggedIn} />
        </View>
        <CarouselView onPress={goToScreenPresent} check={false} />
        <Address onPress={goToScreenMap} uri={PURE_COIN} check={false} />
        <MenuFooter
          onPress1={goToScreenGreenWorld}
          onPress2={goToScreenPresent}
          onPress3={goToScreenMap}
          onPress4={goToScreenPoints}
          onPress5={goToScreenChart}
          onPress6={goToScreenDescriptionWarning}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const _styles = StyleSheet.create({});

export const Home = React.memo(_Home);
