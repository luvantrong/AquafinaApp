import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StartRVM, HomeRVM, InstructRVM } from "@containers";

type StartRVMProps = {};
type HomeRVMProps = {};
type InstructRVMProps = {};

export type StackRVM = {
  HomeRVM: HomeRVMProps | undefined;
  StartRVM: StartRVMProps | undefined;
  InstructRVM: InstructRVMProps | undefined;
};

const Stack = createNativeStackNavigator<StackRVM>();

const _StackRVM = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeRVM"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeRVM" component={HomeRVM} />
      <Stack.Screen name="StartRVM" component={StartRVM} />
      <Stack.Screen name="InstructRVM" component={InstructRVM} />
    </Stack.Navigator>
  );
};

export const StackRVM = React.memo(_StackRVM);
