import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Header,
  ImageView,
  MenuFooter,
  TextView,
  PopupSignOut,
  PopupSignIn,
} from "@components";
import {
  BANNER_HOME_3,
  BA_1,
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
import { Colors } from "@resources";
import { AppContext } from "@shared-state";
import { User } from "@domain";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "Thế Giới Xanh"> & {
  navigation: DrawerNavigationProps;
};

const _GreenWorldScreen: React.FC<PropsType> = (props) => {
  const { navigation, route } = props;
  const { isLoggedIn, setLoggedIn, setDataUser } = React.useContext(AppContext);
  const [modalVisibleSignOut, setModalVisibleSignOut] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const scrollViewRef = React.useRef<ScrollView>(null);

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

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
