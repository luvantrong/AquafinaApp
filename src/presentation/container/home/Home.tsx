import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import {
  Address,
  CarouselView,
  Header,
  Loading,
  MenuFooter,
  PopupSignOut,
  Rating,
  SliderBanner,
  SumBottle,
  PopupSignIn,
  PopupStatistical,
  BackgroundModal,
} from "@components";
import { ICON_MENU, LOGO_AQUAFINA, PURE_COIN } from "@assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackHome } from "@navigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  RootState,
  getAllBanner,
  useAppDispatch,
  getRatings,
  getRatingUser,
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
  const { isLoggedIn, setDataUser, setLoggedIn, key, dataUser } =
    useContext(AppContext);
  const [modalVisibleSignOut, setModalVisibleSignOut] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleStatistical, setModalVisibleStatistical] = useState(false);
  const scrollViewRef = React.useRef<ScrollView>(null);

  useEffect(() => {
    if (
      (isLoggedIn &&
        dataUser &&
        dataUser.statistical &&
        dataUser.statistical.aquafina) ||
      (dataUser.statistical?.other == 0 &&
        dataUser.statistical?.aquafina == 0) ||
      dataUser.point == 0
    ) {
      setModalVisibleStatistical(true);
    }
  }, [isLoggedIn, dataUser]);

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }, []);

  const dispatch = useAppDispatch();
  const banners: Banner[] = useSelector<RootState, Banner[]>(
    (state) => state.banner.banners
  );

  const loadingBanner = useSelector<RootState, boolean>(
    (state) => state.banner.loading
  );

  const loadingRatings = useSelector<RootState, boolean>(
    (state) => state.user.loadingRatings
  );

  const ratings: User[] = useSelector<RootState, User[]>(
    (state) => state.user.users
  );

  useEffect(() => {
    dispatch(getRatings());
  }, []);

  useEffect(() => {
    dispatch(getRatingUser(key));
  }, [key]);

  useEffect(() => {
    dispatch(getAllBanner());
  }, []);

  const ratingData: User[] = ratings.slice(0, 5);

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
      setModalVisible(true);
    }
  };

  const goToScreenPoints = () => {
    if (isLoggedIn) {
      navigation.navigate("Điểm Thưởng Xanh");
      scrollToTop();
    } else {
      setModalVisible(true);
    }
  };

  const goToScreenDescriptionWarning = () => {
    navigation.navigate("WarningDescriptionScreen");
    scrollToTop();
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
        visible={modalVisibleStatistical}
      >
        <PopupStatistical
          onPress={() => {
            setModalVisibleStatistical(!modalVisibleStatistical);
          }}
          sumStatistical={dataUser?.point}
          aquafina={dataUser?.statistical?.aquafina}
          other={dataUser?.statistical?.other}
        />
      </Modal>
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

      <ScrollView
        style={{ marginBottom: 55 }}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
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
          {loadingRatings ? (
            <Loading height={300} />
          ) : (
            <Rating
              checkSignIn={isLoggedIn}
              data={ratingData}
              type={true}
              onPressSignIn={() => {
                navigation.navigate("SignIn");
              }}
              onPress={() => {
                navigation.navigate("Bảng Xếp Hạng");
              }}
            />
          )}
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

export const Home = React.memo(_Home);
