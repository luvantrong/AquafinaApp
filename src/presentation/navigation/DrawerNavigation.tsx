import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Screen, Login } from "../container";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

type RootDrawerParamList = {
  Home: undefined;
  Screen: undefined;
  Login: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const _MyDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Screen" component={Screen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export const MyDrawer = React.memo(_MyDrawer);
