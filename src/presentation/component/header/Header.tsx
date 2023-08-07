import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle,
  Pressable,
} from "react-native";
import React from "react";
import { ICON_HOME, ICON_LOGOUT } from "../../../../assets";

export interface HeaderProps {
  icon_home: string;
  onPressLeft?: () => void;
  icon_aquafina: string;
  icon_logout: string;
  styleIconHome?: StyleProp<ImageStyle>;
  styleIconLogout?: StyleProp<ImageStyle>;
  styleIconAquafina?: StyleProp<ImageStyle>;
  onPressRight?: () => void;
  onPressCenter?: () => void;
}

const _Header: React.FC<HeaderProps> = (props) => {
  const {
    icon_home,
    icon_aquafina,
    icon_logout,
    onPressLeft,
    onPressRight,
    onPressCenter,
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
          source={{ uri: icon_logout }}
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
