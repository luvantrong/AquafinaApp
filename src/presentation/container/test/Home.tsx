import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Header, BackgroundApp } from "../../component";
import {
  ICON_AQUAFINA,
  ICON_HOME,
  ICON_LOGOUT,
  ICON_MENU,
  BACKGROUND_BUTTON_BLUE,
  BACKGROUND_BUTTON_WHITE,
  BACKGROUND_APP,
} from "../../../../assets";
import { Colors } from "../../resource";

export interface HomeProps {}

const _Home: React.FC<HomeProps> = ({}) => {
  return (
    <BackgroundApp>
      <Text>Header App</Text>
      <Header
        icon_home={ICON_HOME}
        icon_aquafina={ICON_AQUAFINA}
        icon_logout={ICON_LOGOUT}
      />
      <Text>Button 1</Text>
      <Button backgroundImage={BACKGROUND_BUTTON_BLUE} title="Đăng nhập" />
      <Text>Button 2</Text>
      <Button
        backgroundImage={BACKGROUND_BUTTON_WHITE}
        title="Đăng ký"
        styleText={{ color: Colors.BLUE_KV }}
      />
    </BackgroundApp>
  );
};

const styles = StyleSheet.create({});

export const Home = React.memo(_Home);
