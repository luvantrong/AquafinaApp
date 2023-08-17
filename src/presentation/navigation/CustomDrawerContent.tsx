import { StyleSheet, Text, View, Image, Pressable, Modal } from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Header, PopupSignIn } from "@components";
import {
  AVATAR_SIGNIN,
  ICON_AVATAR,
  ICON_CLOSE,
  ICON_LOGIN,
  ICON_LOGOUT,
  ICON_MENU_1,
  ICON_MENU_1_FOCUS,
  ICON_MENU_2,
  ICON_MENU_2_FOCUS,
  ICON_MENU_3,
  ICON_MENU_3_FOCUS,
  ICON_MENU_4,
  ICON_MENU_4_FOCUS,
  ICON_MENU_5,
  ICON_MENU_5_FOCUS,
  LOGO_AQUAFINA,
  fontFamily,
} from "@assets";
import { Colors } from "../resource/values";

type CustomDrawerContentProps = DrawerContentComponentProps & {
  imageAvatar: string;
  textAccount: string;
  imageSignOut?: string;
  imageSignIn?: string;
  textSignOut?: string;
  textSignIn?: string;
  checkSignIn: boolean;
};

const _CustomDrawerContent: React.FC<CustomDrawerContentProps> = (props) => {
  const {
    imageAvatar,
    textAccount,
    imageSignIn,
    imageSignOut,
    textSignIn,
    textSignOut,
    checkSignIn,
    state,
  } = props;

  const [modalVisible, setModalVisible] = React.useState(false);

  const hideModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleItemPress = (route: string) => {
    if (route === "Điểm Thưởng Xanh") {
      // Xử lý logic trước khi chuyển hướng đến màn hình hạn chế
      if (checkSignIn) {
        props.navigation.navigate(route);
      } else {
        setModalVisible(true);
      }
    } else if (route === "Bảng Xếp Hạng") {
      if (checkSignIn) {
        props.navigation.navigate(route);
      } else {
        setModalVisible(true);
      }
    } else {
      // Chuyển hướng đến các màn hình khác
      props.navigation.navigate(route);
    }
  };

  const hiddenItems = ["StackHome"];
  const filteredRoutes = state.routes.filter(
    (route: any) => !hiddenItems.includes(route.name)
  );

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <PopupSignIn
            onPress={() => {
              hideModal();
            }}
            onPressSignIn={() => {
              hideModal();
              props.navigation.navigate("SignIn");
            }}
          />
        </Modal>
        <Header
          icon_home={ICON_CLOSE}
          icon_aquafina={LOGO_AQUAFINA}
          checkLogin={checkSignIn}
          onPressLeft={() => props.navigation.closeDrawer()}
          onPressCenter={() => {
            props.navigation.navigate("Home");
          }}
        />
        <View style={StyleSheet.flatten(_styles.containerAvartar)}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 6 }}
            source={{ uri: imageAvatar }}
          />
          <Text style={StyleSheet.flatten(_styles.styleTextAccount)}>
            {textAccount}
          </Text>
        </View>

        {filteredRoutes.map((route: any, index: number) => (
          <Pressable
            key={route.key}
            onPress={() => handleItemPress(route.name)}
          >
            <DrawerItem
              label={route.name}
              labelStyle={{
                fontSize: 16,
                fontFamily: fontFamily.bold,
                marginStart: -20,
              }}
              onPress={() => handleItemPress(route.name)}
              icon={({ focused, color, size }) => {
                let icon;
                if (route.name === "StackHome") {
                  icon = focused ? ICON_MENU_1_FOCUS : ICON_MENU_1;
                } else if (route.name === "Thế Giới Xanh") {
                  icon = focused ? ICON_MENU_1_FOCUS : ICON_MENU_1;
                } else if (route.name === "Quà Tặng Xanh") {
                  icon = focused ? ICON_MENU_2_FOCUS : ICON_MENU_2;
                } else if (route.name === "Bản Đồ Xanh") {
                  icon = focused ? ICON_MENU_3_FOCUS : ICON_MENU_3;
                } else if (route.name === "Điểm Thưởng Xanh") {
                  icon = focused ? ICON_MENU_4_FOCUS : ICON_MENU_4;
                } else if (route.name === "Bảng Xếp Hạng") {
                  icon = focused ? ICON_MENU_5_FOCUS : ICON_MENU_5;
                }
                return (
                  <Image
                    source={{ uri: icon }}
                    style={{ width: 24, height: 24 }}
                  />
                );
              }}
              activeTintColor={Colors.BLUE_TEXT}
              inactiveTintColor={Colors.GREY_5}
              focused={state.index === index}
              activeBackgroundColor="transparent"
              inactiveBackgroundColor="transparent"
            />
          </Pressable>
        ))}
      </DrawerContentScrollView>
      {checkSignIn ? (
        <Pressable style={StyleSheet.flatten(_styles.stylePressable)}>
          <Image
            style={{ width: 24, height: 24 }}
            source={{ uri: ICON_LOGOUT }}
          />
          <Text style={StyleSheet.flatten(_styles.styleTextSignOut)}>
            Sign out
          </Text>
        </Pressable>
      ) : (
        <Pressable style={StyleSheet.flatten(_styles.stylePressable)}>
          <Image
            style={{ width: 24, height: 24 }}
            source={{ uri: ICON_LOGIN }}
          />
          <Text style={StyleSheet.flatten(_styles.styleTextSignOut)}>
            Sign in
          </Text>
        </Pressable>
      )}
    </View>
  );
};

const _styles = StyleSheet.create({
  containerAvartar: {
    marginStart: 16,
    marginTop: 20,
  },
  styleTextAccount: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    marginTop: 5,
    color: Colors.BLACK,
    marginBottom: 16,
  },

  stylePressable: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.GRAY_PLA,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  styleTextSignOut: {
    marginStart: 5,
    fontFamily: fontFamily.bold,
    color: Colors.BLUE_TEXT,
    fontSize: 16,
  },
});

export const CustomDrawerContent = React.memo(_CustomDrawerContent);
