import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn, EnterOTP, SignUp, NotificationSignUp } from "../container";

type SignInProps = {};

type EnterOTPProps = {
  phoneNumber: string;
  type: boolean;
};
type SignUpProps = {};

type NotificationSignUpProps = {};

export type StackUser = {
  SignIn: SignInProps | undefined;
  EnterOTP: EnterOTPProps | undefined;
  SignUp: SignUpProps | undefined;
  NotificationSignUp: NotificationSignUpProps | undefined;
};

const Stack = createNativeStackNavigator<StackUser>();

const _StackUser = () => {
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
      <Stack.Screen name="NotificationSignUp" component={NotificationSignUp} />
    </Stack.Navigator>
  );
};

export const StackUser = React.memo(_StackUser);
