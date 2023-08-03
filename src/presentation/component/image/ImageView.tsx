import {
  StyleSheet,
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
  ImageStyle,
  Dimensions,
} from "react-native";
import React from "react";

export interface ImageViewProps {
  uri: string;
  viewStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

const _ImageView: React.FC<ImageViewProps> = (props) => {
  const { uri } = props;
  return (
    <View style={StyleSheet.flatten([_styles.container, props.viewStyle])}>
      <Image
        style={StyleSheet.flatten([_styles.image, props.imageStyle])}
        source={{ uri: uri }}
      />
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  image: {
    resizeMode: "stretch",
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").height * 1,
  },
});

export const ImageView = React.memo(_ImageView);
