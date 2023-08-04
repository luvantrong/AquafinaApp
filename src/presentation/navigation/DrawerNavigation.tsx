import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../container";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackUser } from "./StackUser";

type RootDrawerParamList = {
  Home: undefined;
  StackUser: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const _MyDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="StackUser"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="StackUser" component={StackUser} />
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export const MyDrawer = React.memo(_MyDrawer);
