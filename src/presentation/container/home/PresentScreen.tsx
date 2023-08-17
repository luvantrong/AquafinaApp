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
  TextView,
  PopupSignOut,
  PopupSignIn,
} from "@components";
import {
  BANNER_HOME,
  BANNER_HOME_2,
  BANNER_HOME_3,
  BANNER_HOME_4,
  ICON_LOGIN,
  ICON_MENU,
  LOGO_AQUAFINA,
  TH,
} from "@assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackHome } from "@navigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import database from "@react-native-firebase/database";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { AppContext } from "@shared-state";
import { User } from "@domain";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "Quà Tặng Xanh"> & {
  navigation: DrawerNavigationProps;
};

const _PresentScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn, setLoggedIn, setDataUser } = React.useContext(AppContext);
  const [modalVisibleSignOut, setModalVisibleSignOut] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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

  const goToScreenRules = () => {
    navigation.navigate("RulesScreen");
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
    if (isLoggedIn) {
      navigation.navigate("Bảng Xếp Hạng");
    } else {
      setModalVisible(true);
    }
  };

  const goToScreenPoints = () => {
    if (isLoggedIn) {
      navigation.navigate("Điểm Thưởng Xanh");
    } else {
      setModalVisible(true);
    }
  };

  const goToScreenDescriptionWarning = () => {
    navigation.navigate("WarningDescriptionScreen");
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
      <ScrollView>
        <TextView
          title="Quà tặng xanh"
          textStyle={{
            textTransform: "none",
            fontSize: 18,
            marginTop: 15,
            marginBottom: 10,
          }}
        />
        <CarouselView check={true} />
        <Address uri={BANNER_HOME_4} onPress={goToScreenRules} check={true} />
        <ImageView uri={TH} imageStyle={{ height: 216, width: "100%" }} />
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

export const PresentScreen = React.memo(_PresentScreen);
