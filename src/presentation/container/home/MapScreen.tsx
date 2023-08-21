import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Modal,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Header,
  ImageView,
  MenuFooter,
  PopupSignOut,
  PopupSignIn,
} from "@components";
import { ICON_MENU, LOGO_AQUAFINA, MAP_8, MAP_9, W_2 } from "@assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackHome } from "@navigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { AppContext } from "@shared-state";
import { User } from "@domain";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "Bản Đồ Xanh"> & {
  navigation: DrawerNavigationProps;
};

const _MapScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn, setDataUser, setLoggedIn } = React.useContext(AppContext);
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
      scrollToTop();
    }
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
      >
        <PopupSignOut
          onPress={() => {
            setModalVisibleSignOut(!modalVisibleSignOut);
          }}
          onPressSignOut={() => {
            setModalVisibleSignOut(!modalVisibleSignOut);
            setLoggedIn(false);
            setDataUser({} as User);
            navigation.navigate("Home");
          }}
          onPressCancel={() => {
            setModalVisibleSignOut(!modalVisibleSignOut);
          }}
        />
      </Modal>
      <ScrollView ref={scrollViewRef}>
        <Pressable
          onPress={() => {
            navigation.navigate("StackRVM");
          }}
        >
          <ImageView uri={W_2} imageStyle={{ height: 600 }} />
        </Pressable>
        <ImageView uri={MAP_8} imageStyle={{ height: 600 }} />
        <ImageView
          uri={MAP_9}
          imageStyle={{
            height: 600,
            width: Dimensions.get("window").width * 1.2,
            resizeMode: "contain",
          }}
          viewStyle={{ marginStart: 6 }}
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

export const MapScreen = React.memo(_MapScreen);
