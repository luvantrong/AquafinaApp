import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  SignIn,
  Home,
  MapScreen,
  GreenWorldScreen,
  PresentScreen,
  PointsScreen,
  ChartScreen,
} from "../container";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackHome } from "./StackHome";
import { CustomDrawerContent } from "./CustomDrawerContent";
import {
  AVATAR_SIGNIN,
  ICON_AVATAR,
  ICON_CLOSE,
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
  fontFamily,
} from "../../../assets";
import { StyleSheet, Image } from "react-native";
import { Colors } from "../resource";

type RootDrawerParamList = {
  "Thế Giới Xanh": undefined;
  "Quà Tặng Xanh": undefined;
  "Bản Đồ Xanh": undefined;
  "Điểm Thưởng Xanh": undefined;
  "Bảng Xếp Hạng": undefined;
  StackHome: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const _MyDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => (
          <CustomDrawerContent
            checkSignIn={false}
            imageAvatar={AVATAR_SIGNIN}
            textAccount="Lê Quỳnh Ái Vân"
            {...props}
          />
        )}
        initialRouteName="StackHome"
        screenOptions={({ route }) => ({
          headerShown: false,
          drawerIcon: ({ focused, color, size }) => {
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
              <Image source={{ uri: icon }} style={{ width: 24, height: 24 }} />
            );
          },
          drawerLabelStyle: _styles.drawerLabel,
          drawerActiveTintColor: Colors.BLUE_TEXT,
          drawerInactiveTintColor: Colors.GREY_5,
          drawerActiveBackgroundColor: "transparent",
          drawerInactiveBackgroundColor: "transparent",
          drawerStyle: {
            backgroundColor: Colors.WHITE,
          },
          drawerType: "slide",
          drawerPosition: "left",
          swipeEdgeWidth: 50,
        })}
      >
        <Drawer.Screen name="Thế Giới Xanh" component={GreenWorldScreen} />
        <Drawer.Screen name="Quà Tặng Xanh" component={PresentScreen} />
        <Drawer.Screen name="Bản Đồ Xanh" component={MapScreen} />
        <Drawer.Screen name="Điểm Thưởng Xanh" component={PointsScreen} />
        <Drawer.Screen name="Bảng Xếp Hạng" component={ChartScreen} />
        <Drawer.Screen
          name="StackHome"
          component={StackHome}
          options={{
            drawerLabel: () => null,
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const _styles = StyleSheet.create({
  drawerLabel: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    marginStart: -20,
    marginVertical: 5,
  },
});

export const MyDrawer = React.memo(_MyDrawer);
