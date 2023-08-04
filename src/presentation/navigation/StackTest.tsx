import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn, EnterOTP, SignUp } from "../container";

type SignInProps = {};

type EnterOTPProps = {
  phoneNumber: string;
};
type SignUpProps = {};

export type stackTest = {
  SignIn: SignInProps | undefined;
  EnterOTP: EnterOTPProps | undefined;
  SignUp: SignUpProps | undefined;
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
      <Stack.Screen name="EnterOTP" component={EnterOTP} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export const StackTest = React.memo(_StackTest);
