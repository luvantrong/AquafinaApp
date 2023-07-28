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
// import {BACKGROUND} from '../../../../assets';
// import {Colors} from '../../resource';

export interface BackgroundProps {
  children: React.ReactNode;
  styleBackground?: StyleProp<ViewStyle>;
}

const _Background: React.FC<BackgroundProps> = (props) => {
  const { children, styleBackground } = props;
  return (
    // <ImageBackground
    //   source={BACKGROUND}
    //   style={[styles.container, styleBackground]}>
    //   <StatusBar barStyle="dark-content" backgroundColor={Colors.BLUE_PEPSI} />
    //   {children}
    // </ImageBackground>
    <></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const Background = React.memo(_Background);
