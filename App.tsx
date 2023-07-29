import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Screen } from "./src/presentation/container";

type RootDrawerParamList = {
  Home: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Screen} />
      </Drawer.Navigator>
    </NavigationContainer>
    // <Home />
  );
};

export default App;
