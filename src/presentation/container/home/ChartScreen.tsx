import { ScrollView, StyleSheet, View, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Header,
  MenuFooter,
  Rating,
  PopupSignOut,
  PopupSignIn,
} from "@components";
import { ICON_MENU, LOGO_AQUAFINA } from "@assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackHome } from "@navigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { AppContext } from "@shared-state";
import { User } from "@domain";
import { useSelector } from "react-redux";
import { RootState, getRatings, useAppDispatch } from "@shared-state";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "Bảng Xếp Hạng"> & {
  navigation: DrawerNavigationProps;
};

const _ChartScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn, dataUser, setDataUser, setLoggedIn } =
    React.useContext(AppContext);
  const dispatch = useAppDispatch();
  const ratings = useSelector((state: RootState) => state.user.users);
  const [modalVisibleSignOut, setModalVisibleSignOut] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(getRatings());
  }, []);
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
          data={ratings}
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

export const ChartScreen = React.memo(_ChartScreen);
