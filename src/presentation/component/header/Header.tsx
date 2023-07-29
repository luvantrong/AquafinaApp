import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from "react-native";
import React from "react";
import { ICON_HOME, ICON_AQUAFINA, ICON_LOGOUT } from "../../../../assets";

export interface HeaderProps {
  icon_home: string;
  icon_aquafina: string;
  icon_logout: string;
  styleIconHome?: StyleProp<ImageStyle>;
  styleIconLogout?: StyleProp<ImageStyle>;
}

const _Header: React.FC<HeaderProps> = (props) => {
  const { icon_home, icon_aquafina, icon_logout } = props;
  return (
    <View style={StyleSheet.flatten(_styles.container)}>
      <Image
        style={StyleSheet.flatten([_styles.image_home, props.styleIconHome])}
        source={{ uri: icon_home }}
      />
      <Image
        style={StyleSheet.flatten(_styles.image_aquafina)}
        source={{ uri: icon_aquafina }}
      />
      <Image
        style={StyleSheet.flatten([
          _styles.image_logout,
          props.styleIconLogout,
        ])}
        source={{ uri: icon_logout }}
      />
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
    width: 75,
    height: 25,
  },

  image_logout: {
    width: 28,
    height: 28,
    display: "flex",
    opacity: 0,
  },
});

export const Header = React.memo(_Header);
