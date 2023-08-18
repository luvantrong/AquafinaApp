import {
  StyleSheet,
  Text,
  View,
  Image,
  StyleProp,
  ImageStyle,
  Pressable,
} from "react-native";
import React from "react";
import { ICON_LOGIN, ICON_LOGOUT } from "@assets";

export type HeaderProps = {
  icon_home: string;
  onPressLeft?: () => void;
  icon_aquafina: string;
  styleIconHome?: StyleProp<ImageStyle>;
  styleIconLogout?: StyleProp<ImageStyle>;
  styleIconAquafina?: StyleProp<ImageStyle>;
  onPressRight?: () => void;
  onPressCenter?: () => void;
  checkLogin?: boolean;
};

const _Header: React.FC<HeaderProps> = (props) => {
  const {
    icon_home,
    icon_aquafina,
    onPressLeft,
    onPressRight,
    onPressCenter,
    checkLogin,
  } = props;
  return (
    <View style={StyleSheet.flatten(_styles.container)}>
      <Pressable onPress={onPressLeft}>
        <Image
          style={StyleSheet.flatten([_styles.image_home, props.styleIconHome])}
          source={{ uri: icon_home }}
        />
      </Pressable>

      <Pressable onPress={onPressCenter}>
        <Image
          style={StyleSheet.flatten([
            _styles.image_aquafina,
            props.styleIconAquafina,
          ])}
          source={{ uri: icon_aquafina }}
        />
      </Pressable>

      <Pressable onPress={onPressRight}>
        <Image
          style={StyleSheet.flatten([
            _styles.image_logout,
            props.styleIconLogout,
          ])}
          source={checkLogin ? { uri: ICON_LOGOUT } : { uri: ICON_LOGIN }}
        />
      </Pressable>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 56,
    paddingHorizontal: 10,
  },

  image_home: {
    width: 28,
    height: 28,
  },

  image_aquafina: {
    width: 96,
    height: 40,
  },

  image_logout: {
    width: 28,
    height: 28,
    display: "flex",
    opacity: 0,
  },
});

export const Header = React.memo(_Header);
