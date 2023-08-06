import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Header } from "../component";
import {
  ICON_AVATAR,
  ICON_CLOSE,
  ICON_LOGOUT,
  LOGO_AQUAFINA,
  fontFamily,
} from "../../../assets";
import { Colors } from "../resource";

type CustomDrawerContentProps = DrawerContentComponentProps & {
  imageAvatar: string;
  textAccount: string;
};

const _CustomDrawerContent: React.FC<CustomDrawerContentProps> = (props) => {
  const { imageAvatar, textAccount } = props;
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <Header
          icon_home={ICON_CLOSE}
          icon_aquafina={LOGO_AQUAFINA}
          icon_logout={ICON_LOGOUT}
          onPressLeft={() => props.navigation.closeDrawer()}
        />
        <View style={StyleSheet.flatten(_styles.containerAvartar)}>
          <Image
            style={{ width: 60, height: 60 }}
            source={{ uri: imageAvatar }}
          />
          <Text style={StyleSheet.flatten(_styles.styleTextAccount)}>
            {textAccount}
          </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Pressable style={StyleSheet.flatten(_styles.stylePressable)}>
        <Image
          style={{ width: 24, height: 24 }}
          source={{ uri: ICON_LOGOUT }}
        />
        <Text style={StyleSheet.flatten(_styles.styleTextSignOut)}>
          Sign out
        </Text>
      </Pressable>
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