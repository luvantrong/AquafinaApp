import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Button, ImageView, TextView } from "@components";
import {
  AVATAR_1,
  AVATAR_2,
  AVATAR_3,
  BACKGROUND_BUTTON_WHITE,
  R1,
  R2,
  R3,
  RATING_N1,
  RATING_N2,
  RATING_N3,
  RIPPLE,
  fontFamily,
} from "@assets";
import { Colors } from "@resources";

export interface Rating {
  key: string;
  avatar: string;
  name: string;
  point: number;
}

const DATA: Rating[] = [
  {
    key: "1",
    avatar: AVATAR_1,
    name: "Nguyễn Văn A",
    point: 1000,
  },
  {
    key: "2",
    avatar: AVATAR_1,
    name: "Nguyễn  B",
    point: 999,
  },
  {
    key: "3",
    avatar: AVATAR_1,
    name: "Nguyễn Văn C",
    point: 500,
  },
  {
    key: "4",
    avatar: AVATAR_2,
    name: "Nguyễn Văn D",
    point: 450,
  },
  {
    key: "5",
    avatar: AVATAR_3,
    name: "Nguyễn Văn E",
    point: 200,
  },
];

type ItemProps = {
  item: Rating;
  index: number;
};

const Item = ({ item, index }: ItemProps) => {
  let backgroundColor = Colors.WHITE;
  let uri = RATING_N1;
  let uriR = R1;
  let displayImage: "flex" | "none" | undefined = "none";
  let displayText: "flex" | "none" | undefined = "flex";
  let color = Colors.GREY_5;

  if (index == 0) {
    backgroundColor = Colors.R1;
    displayImage = "flex";
    displayText = "none";
    color = Colors.WHITE;
  } else if (index == 1) {
    backgroundColor = Colors.R2;
    displayImage = "flex";
    displayText = "none";
    uri = RATING_N2;
    uriR = R2;
    color = Colors.WHITE;
  } else if (index == 2) {
    backgroundColor = Colors.R3;
    displayImage = "flex";
    displayText = "none";
    uri = RATING_N3;
    uriR = R3;
    color = Colors.WHITE;
  }
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        marginBottom: 10,
        height: 33,
        borderRadius: 6,
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Image
        style={{
          width: 38,
          height: 33,
          overflow: "hidden",
          borderRadius: 6,
          display: displayImage,
        }}
        source={{ uri: uri }}
      />
      <Text
        style={{
          display: displayText,
          color: Colors.GREY_5,
          fontFamily: fontFamily.bold,
          marginStart: 11,
          fontSize: 12,
        }}
      >
        #{index + 1}
      </Text>
      <Image
        style={{ marginStart: 10, marginEnd: 5 }}
        source={{ uri: item.avatar, width: 24, height: 24 }}
      />
      <Text style={{ color: color, fontFamily: fontFamily.bold }}>
        {item.name}
      </Text>
      <Image
        style={{
          display: displayImage,
          width: 20,
          height: 20,
          position: "absolute",
          right: 70,
        }}
        source={{ uri: uriR }}
      />
      <Text
        style={{
          position: "absolute",
          right: 7,
          color: color,
          fontFamily: fontFamily.bold,
        }}
      >
        {item.point}
      </Text>
    </View>
  );
};

type RatingProps = {
  checkSignIn: boolean;
};

const _Rating: React.FC<RatingProps> = (props) => {
  const { checkSignIn } = props;

  return (
    <View>
      <View style={_styles.container}>
        <TextView
          textStyle={{
            color: Colors.WHITE,
            fontSize: 12,
            fontFamily: fontFamily.medium,
            marginTop: 25,
            marginBottom: 15,
          }}
          title="13/06/2022 - 19/06/2022"
        />
        <View style={{ marginHorizontal: 54 }}>
          {DATA.map((item, index) => (
            <Item item={item} index={index} key={item.key} />
          ))}
        </View>
        {checkSignIn ? (
          <View style={{ marginTop: 15 }}>
            <TextView
              title="Vui lòng đăng nhập để xem thứ hạng của bạn"
              textStyle={{
                color: Colors.WHITE,
                fontSize: 14,
                textTransform: "none",
              }}
            />
            <Button
              title="Đăng nhập"
              backgroundImage={BACKGROUND_BUTTON_WHITE}
              styleText={{ color: Colors.BLUE_TEXT }}
              stylePressable={{ marginHorizontal: 54, marginTop: 20 }}
            />
          </View>
        ) : (
          <View style={{ marginTop: 15 }}>
            <TextView
              title="Vui lòng đăng nhập để xem thứ hạng của bạn"
              textStyle={{
                color: Colors.WHITE,
                fontSize: 14,
                textTransform: "none",
              }}
            />
            <Button
              title="Đăng nhập"
              backgroundImage={BACKGROUND_BUTTON_WHITE}
              styleText={{ color: Colors.BLUE_TEXT }}
              stylePressable={{ marginHorizontal: 54, marginTop: 20 }}
            />
          </View>
        )}
      </View>
      <Text style={_styles.textTitle}>Bảng xếp hạng</Text>
      <ImageView
        uri={RIPPLE}
        imageStyle={{ width: 310, height: 310 }}
        viewStyle={{ position: "absolute", left: -180, top: 70 }}
      />
    </View>
  );
};

const _styles = StyleSheet.create({
  textTitle: {
    textTransform: "none",
    borderWidth: 1,
    borderColor: Colors.BLUE_300,
    borderRadius: 10,
    width: 150,
    color: Colors.WHITE,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 14,
    fontFamily: fontFamily.bold,
    paddingVertical: 7,
    backgroundColor: Colors.BLUE_300,
    position: "absolute",
  },

  container: {
    backgroundColor: Colors.BLUE_KV,
    marginTop: 18,
    height: 400,
  },
});

export const Rating = React.memo(_Rating);
