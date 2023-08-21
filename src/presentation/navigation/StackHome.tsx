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
import { StackRVM } from "./StackRVM";

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
type StackRVMProps = {};

export type StackHome = {
  SignIn: SignInProps | undefined;
  EnterOTP: EnterOTPProps | undefined;
  SignUp: SignUpProps | undefined;
  NotificationSignUp: NotificationSignUpProps | undefined;
  Home: HomeProps | undefined;
  "Điểm Thưởng Xanh": ChartScreenProps | undefined;
  "Thế Giới Xanh": GreenWorldScreenProps | undefined;
  "Bản Đồ Xanh": MapScreenProps | undefined;
  "Bảng Xếp Hạng": PointsScreenProps | undefined;
  "Quà Tặng Xanh": PresentScreenProps | undefined;
  WarningScreen: WarningScreenProps | undefined;
  WarningDescriptionScreen: WarningDescriptionScreenProps | undefined;
  RulesScreen: RulesScreenProps | undefined;
  StackRVM: StackRVMProps | undefined;
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
      <Stack.Screen name="Bảng Xếp Hạng" component={ChartScreen} />
      <Stack.Screen name="Thế Giới Xanh" component={GreenWorldScreen} />
      <Stack.Screen name="Bản Đồ Xanh" component={MapScreen} />
      <Stack.Screen name="Điểm Thưởng Xanh" component={PointsScreen} />
      <Stack.Screen name="Quà Tặng Xanh" component={PresentScreen} />
      <Stack.Screen name="WarningScreen" component={Warning} />
      <Stack.Screen
        name="WarningDescriptionScreen"
        component={DescriptionWarning}
      />
      <Stack.Screen name="RulesScreen" component={RulesScreen} />
      <Stack.Screen name="StackRVM" component={StackRVM} />
    </Stack.Navigator>
  );
};

export const StackHome = React.memo(_StackHome);
