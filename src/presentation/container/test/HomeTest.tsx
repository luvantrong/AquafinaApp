import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Header, BackgroundApp, TextField } from "@components";
import {
  ICON_HOME,
  ICON_LOGOUT,
  BACKGROUND_BUTTON_BLUE,
  BACKGROUND_BUTTON_WHITE,
  LOGO_AQUAFINA,
} from "@assets";
import { Colors } from "@resources";

export interface HomeProps {}

const _HomeTest: React.FC<HomeProps> = ({}) => {
  return (
    <BackgroundApp>
      <Text>Header App</Text>
      <Header
        icon_home={ICON_HOME}
        icon_aquafina={LOGO_AQUAFINA}
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
      <Text>TextField</Text>
      <TextField
        title="Số điện thoại"
        placeholder="Nhập số điện thoại của bạn"
        value="abc"
      />
    </BackgroundApp>
  );
};

const styles = StyleSheet.create({});

export const HomeTest = React.memo(_HomeTest);
