import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SignIn,
  EnterOTP,
  SignUp,
  NotificationSignUp,
  Home,
  ChartScreen,
  GreenWorldScreen,
  MapScreen,
  PointsScreen,
  PresentScreen,
  Warning,
  DescriptionWarning,
  RulesScreen,
} from "@containers";

type SignInProps = {};
type EnterOTPProps = {
  phoneNumber: string | undefined;
  type: boolean;
  name?: string | undefined;
};
type SignUpProps = {};
type NotificationSignUpProps = {};
type HomeProps = {};
type ChartScreenProps = {};
type GreenWorldScreenProps = {};
type MapScreenProps = {};
type PointsScreenProps = {};
type PresentScreenProps = {};
type WarningScreenProps = {};
type WarningDescriptionScreenProps = {};
type RulesScreenProps = {};

export type StackHome = {
  SignIn: SignInProps | undefined;
  EnterOTP: EnterOTPProps | undefined;
  SignUp: SignUpProps | undefined;
  NotificationSignUp: NotificationSignUpProps | undefined;
  Home: HomeProps | undefined;
  ChartScreen: ChartScreenProps | undefined;
  GreenWorldScreen: GreenWorldScreenProps | undefined;
  MapScreen: MapScreenProps | undefined;
  PointsScreen: PointsScreenProps | undefined;
  PresentScreen: PresentScreenProps | undefined;
  WarningScreen: WarningScreenProps | undefined;
  WarningDescriptionScreen: WarningDescriptionScreenProps | undefined;
  RulesScreen: RulesScreenProps | undefined;
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
      <Stack.Screen name="ChartScreen" component={ChartScreen} />
      <Stack.Screen name="GreenWorldScreen" component={GreenWorldScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PointsScreen" component={PointsScreen} />
      <Stack.Screen name="PresentScreen" component={PresentScreen} />
      <Stack.Screen name="WarningScreen" component={Warning} />
      <Stack.Screen
        name="WarningDescriptionScreen"
        component={DescriptionWarning}
      />
      <Stack.Screen name="RulesScreen" component={RulesScreen} />
    </Stack.Navigator>
  );
};

export const StackHome = React.memo(_StackHome);
