import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SignIn,
  EnterOTP,
  SignUp,
  NotificationSignUp,
  Home,
} from "../container";

type SignInProps = {};

type EnterOTPProps = {
  phoneNumber: string;
  type: boolean;
};
type SignUpProps = {};

type NotificationSignUpProps = {};

type HomeProps = {};

export type StackHome = {
  SignIn: SignInProps | undefined;
  EnterOTP: EnterOTPProps | undefined;
  SignUp: SignUpProps | undefined;
  NotificationSignUp: NotificationSignUpProps | undefined;
  Home: HomeProps | undefined;
};

const Stack = createNativeStackNavigator<StackHome>();

const _StackHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="EnterOTP" component={EnterOTP} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="NotificationSignUp" component={NotificationSignUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export const StackUser = React.memo(_StackHome);
