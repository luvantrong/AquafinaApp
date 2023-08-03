import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Login } from "../container";

type HomeProps = {};
type LoginProps = {};

export type stackTest = {
  Home: HomeProps | undefined;
  Login: LoginProps | undefined;
};

const Stack = createNativeStackNavigator<stackTest>();

const _StackTest = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export const StackTest = React.memo(_StackTest);
