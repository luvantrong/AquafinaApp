import React from "react";
import {
  StyleSheet,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  SafeAreaViewBase,
  StyleProp,
  ViewStyle,
} from "react-native";
import { BACKGROUND_APP } from "../../../../assets";
import { Colors } from "../../resource";

export interface BackgroundProps {
  children: React.ReactNode;
  styleBackground?: StyleProp<ViewStyle>;
}

const _BackgroundApp: React.FC<BackgroundProps> = (props) => {
  const { children, styleBackground } = props;
  return (
    <ImageBackground
      source={{ uri: BACKGROUND_APP }}
      style={[styles.container, styleBackground]}
    >
      <StatusBar barStyle="dark-content" backgroundColor={Colors.WHITE} />
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const BackgroundApp = React.memo(_BackgroundApp);
