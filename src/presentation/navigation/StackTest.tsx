import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, SignIn, SignInOTP } from "../container";

type SignInProps = {};

type SignInOTPProps = {
  phoneNumber: string;
};

export type stackTest = {
  SignIn: SignInProps | undefined;
  SignInOTP: SignInOTPProps | undefined;
};

const Stack = createNativeStackNavigator<stackTest>();

const _StackTest = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignInOTP" component={SignInOTP} />
    </Stack.Navigator>
  );
};

export const StackTest = React.memo(_StackTest);
