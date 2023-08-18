import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
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
import { User } from "@domain";
import { AppContext, RootState, useAppDispatch } from "@shared-state";
import { useSelector } from "react-redux";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

interface ItemTab {
  id: number;
  title: string;
}

const Me: User = {
  key: "1",
  avatar: AVATAR_3,
  name: "Bùi Văn Anh",
  point: 200,
  phone: "0123456789",
};

type ItemProps = {
  item: User ;
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
        style={{ marginStart: 10, marginEnd: 5, borderRadius: 50 }}
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
          right: 55,
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

const Item2 = ({ item, index }: ItemProps) => {
  let backgroundColor = Colors.WHITE;
  let uri = RATING_N1;
  let uriR = R1;
  let displayImage: "flex" | "none" | undefined = "none";
  let displayText: "flex" | "none" | undefined = "flex";
  let color = Colors.GREY_5;
  const places = 10;

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
        style={{ marginStart: 10, marginEnd: 5, borderRadius: 50 }}
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
          right: 55,
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
  containerStyle?: StyleProp<ViewStyle>;
  data: User[];
  type: boolean;
  onPressSignIn?: () => void;
  onPress?: () => void;
};

const _Rating: React.FC<RatingProps> = (props) => {
  const { checkSignIn, data, type } = props;
  const { key, isLoggedIn } = React.useContext(AppContext);

  const itemUser = useSelector((state: RootState) => state.user.item);
  const index = useSelector((state: RootState) => state.user.index);

  const scrollViewRef = useRef<ScrollView>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  useEffect(() => {
    if (scrollViewRef.current && selectedIndex >= 0) {
      const itemWidth = Dimensions.get("window").width / 3 + 11; // Độ rộng của mỗi phần tử danh sách
      const screenWidth = Dimensions.get("window").width;
      const itemCount = DATADATE.length;
      const maxScrollX = itemWidth * (itemCount - 1);
      let scrollToX = itemWidth * selectedIndex;
      // Đảm bảo scrollToX không vượt quá giới hạn của danh sách
      scrollToX = Math.min(scrollToX, maxScrollX);

      // Tính toán vị trí căn giữa theo chiều rộng màn hình
      const offsetX = Math.max(0, scrollToX - (screenWidth - itemWidth) / 2);

      // Cuộn đến phần tử được chọn và căn giữa theo chiều rộng màn hình
      scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
    }
  }, [selectedIndex]);

  const [status, setStatus] = useState(DATADATE[1].title);

  const setStatusFilter = (status: string) => {
    setStatus(status);
  };

  interface ItemDate {
    id: number;
    title: string;
  }

  type ItemDateProps = {
    item: ItemDate;
  };

  const ItemDate = ({ item }: ItemDateProps) => {
    return (
      <TouchableOpacity
        style={[_styles.btnTab, status === item.title && _styles.btnTabActive]}
        onPress={() => {
          setStatusFilter(item.title);
          setSelectedIndex(item.id);
        }}
      >
        <Text
          style={[_styles.textTab, status === item.title && _styles.textActive]}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={props.containerStyle}>
      <View style={_styles.container}>
        <ImageView
          uri={RIPPLE}
          imageStyle={{ width: 310, height: 310 }}
          viewStyle={{ position: "absolute", left: -180, top: 40 }}
        />
        {checkSignIn ? (
          <View style={_styles.listTab}>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {DATADATE.map((item) => (
                <ItemDate item={item} key={item.id} />
              ))}
            </ScrollView>
          </View>
        ) : (
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
        )}

        <View style={{ marginHorizontal: 54 }}>
          {data.map((item, index) => (
            <Item item={item} index={index} key={item.key} />
          ))}
        </View>

        {checkSignIn ? (
          <View style={{ marginHorizontal: 54 }}>
            <TextView
              title="Hạng của tôi"
              textStyle={{
                color: Colors.WHITE,
                fontSize: 14,
                textTransform: "none",
                marginBottom: 10,
              }}
            />
            <Item2 item={itemUser} index={index} />
            <Button
              title="Xem chi tiết"
              backgroundImage={BACKGROUND_BUTTON_WHITE}
              stylePressable={{
                marginHorizontal: 0,
                display: type ? "flex" : "none",
              }}
              styleText={{ color: Colors.BLUE_TEXT }}
              onPress={props.onPress}
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
              onPress={props.onPressSignIn}
            />
          </View>
        )}
      </View>
      <Text style={_styles.textTitle}>Bảng xếp hạng</Text>
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
    height: "auto",
    paddingBottom: 30,
  },

  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
    marginHorizontal: 5,
    marginTop: 37,
  },

  btnTab: {
    width: Dimensions.get("window").width / 3,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: Colors.WHITE,
    justifyContent: "center",
    height: 33,
    alignItems: "center",
    borderRadius: 4,
    marginHorizontal: 5,
  },
  textTab: {
    fontSize: 14,
    color: Colors.WHITE,
    fontFamily: fontFamily.bold,
  },
  btnTabActive: {
    backgroundColor: Colors.WHITE,
  },
  textActive: {
    color: Colors.BLUE_TEXT,
  },
});

export const Rating = React.memo(_Rating);

const DATADATE: ItemTab[] = [
  {
    id: 0,
    title: "06/2022 Tuần 1",
  },
  {
    id: 1,
    title: "06/2022 Tuần 2",
  },
  {
    id: 2,
    title: "06/2022 Tuần 3",
  },
  {
    id: 3,
    title: "06/2022 Tuần 4",
  },
  {
    id: 4,
    title: "07/2022 Tuần 1",
  },
  {
    id: 5,
    title: "07/2022 Tuần 2",
  },
  {
    id: 6,
    title: "07/2022 Tuần 3",
  },
  {
    id: 7,
    title: "07/2022 Tuần 4",
  },
];
