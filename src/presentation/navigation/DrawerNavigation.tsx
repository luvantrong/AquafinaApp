import { createDrawerNavigator } from "@react-navigation/drawer";
import { Screen } from "../container";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackTest } from "./StackTest";

type RootDrawerParamList = {
  Screen: undefined;
  StackTest: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const _MyDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="StackTest"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="StackTest" component={StackTest} />
        <Drawer.Screen name="Screen" component={Screen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export const MyDrawer = React.memo(_MyDrawer);
