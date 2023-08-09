import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageView, TextView } from "@components";
import { AVATAR_1, RIPPLE, fontFamily } from "@assets";
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
    name: "Nguyễn Văn B",
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
    avatar: AVATAR_1,
    name: "Nguyễn Văn B",
    point: 999,
  },
  {
    key: "5",
    avatar: AVATAR_1,
    name: "Nguyễn Văn C",
    point: 500,
  },
];

type ItemProps = {
  item: Rating;
  index: number;
};

const Item = ({ item, index }: ItemProps) => {
  let backgroundColor = Colors.WHITE;
  if (index == 0) {
    backgroundColor = Colors.R1;
  } else if (index == 1) {
    backgroundColor = Colors.R2;
  } else if (index == 2) {
    backgroundColor = Colors.R3;
  }
  return (
    <View style={{ backgroundColor: backgroundColor }}>
      <Text>{item.name}</Text>
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
          }}
          title="13/06/2022 - 19/06/2022"
        />
      </View>
      <Text style={_styles.textTitle}>Bảng xếp hạng</Text>
      <ImageView
        uri={RIPPLE}
        imageStyle={{ width: 210, height: 210 }}
        viewStyle={{ position: "absolute", left: -110, top: 200 }}
      />

      {DATA.map((item, index) => (
        <Item item={item} index={index} key={item.key} />
      ))}
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
    height: 579,
  },
});

export const Rating = React.memo(_Rating);
