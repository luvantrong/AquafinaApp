import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { BACKGROUND_BUTTON_BLUE, BANNER_HOME } from "../../../../assets";
import { Button } from "../button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackHome } from "../../navigation";
import { NavigationProp } from "@react-navigation/native";

export interface Banner {
  id: number;
  image: string;
  screen: string;
}

export interface Slide {
  data: Banner[];
  checkSignIn: boolean;
  onPress?: (screen: string) => void;
}

const _SliderBanner: React.FC<Slide> = (props) => {
  const { data, checkSignIn, onPress } = props;

  return (
    <View style={_styles.container}>
      {checkSignIn ? (
        <Swiper
          // loop={false}
          autoplay={true}
        >
          {data.map((item) => (
            <View key={item.id} style={_styles.slide}>
              <Image source={{ uri: item.image }} style={_styles.image} />
              <Button
                onPress={() => onPress && onPress(item.screen)}
                title="Tìm hiểu thêm"
                backgroundImage={BACKGROUND_BUTTON_BLUE}
                stylePressable={_styles.showPressable}
              />
            </View>
          ))}
        </Swiper>
      ) : (
        <Swiper
          // loop={false}
          autoplay={true}
          showsPagination={false}
        >
          {data.map((item) => (
            <View key={item.id} style={_styles.slide}>
              <Image source={{ uri: item.image }} style={_styles.image} />
            </View>
          ))}
        </Swiper>
      )}
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    height: 600,
    backgroundColor: "transparent",
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  showPressable: {
    position: "absolute",
    bottom: 50,
    width: 122,
  },
});

export const SliderBanner = React.memo(_SliderBanner);
