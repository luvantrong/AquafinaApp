import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@resources";
import { Header, ImageView, TextView, TextViewBold } from "@components";
import {
  BTN_CONFIRM,
  BTN_START,
  CONTENT,
  FB_RVM,
  ICON_HOME,
  IMAGE_BOTTOM_LOGIN,
  IMG_RVM_HOME,
  LEFT_CIRCLE,
  LOGO_AQUAFINA,
  LOGO_STRUCT,
  QR_CODE,
  STR_1,
  STR_2,
  STR_3,
  fontFamily,
} from "@assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackRVM } from "@navigation";

type PropsType = NativeStackScreenProps<StackRVM, "HomeRVM">;

const _InstructRVM: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const [stringToShow, setStringToShow] = useState("");

  useEffect(() => {
    let currentString = "";
    let counter = 1;

    const interval = setInterval(() => {
      currentString += counter;
      setStringToShow(currentString);
      counter++;

      if (counter > 6) {
        counter = 1;
        currentString = "";
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={_styles.container}>
      <Header
        icon_aquafina={LOGO_AQUAFINA}
        icon_home={ICON_HOME}
        styleIconHome={{ opacity: 0 }}
      />
      <TextView title="Hướng dẫn tham gia" />
      <View style={_styles.viewContent}>
        <View style={_styles.viewTop}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={{ uri: LEFT_CIRCLE }}
              style={{ width: 30, height: 30 }}
            />
          </Pressable>
          <Image
            source={{ uri: LOGO_STRUCT }}
            style={{ width: 65, height: 45, resizeMode: "stretch" }}
          />
        </View>
        <View style={_styles.viewStruct}>
          <Image
            source={{ uri: STR_1 }}
            style={{
              width: 80,
              height: 80,
              resizeMode: "stretch",
              marginEnd: 20,
            }}
          />
          <View
            style={{
              width: Dimensions.get("window").width * 0.7,
              marginTop: -10,
            }}
          >
            <Text style={_styles.textTitle}>Bước 1</Text>
            <Text style={_styles.textContent}>
              Lần lượt bỏ từng chai nhựa rỗng vào ô bên trái và chờ hệ thống xử
              lý.
            </Text>
          </View>
        </View>
        <View style={_styles.viewStruct}>
          <Image
            source={{ uri: STR_2 }}
            style={{
              width: 80,
              height: 80,
              resizeMode: "stretch",
              marginEnd: 20,
            }}
          />
          <View
            style={{
              width: Dimensions.get("window").width * 0.7,
            }}
          >
            <Text style={_styles.textTitle}>Bước 2</Text>
            <TextViewBold
              text="Hoàn tất toàn quá trình bỏ chai.
Quét mã QR bằng điện thoại để dẫn về trang chủ: Aquafina.pepsishop.vn"
              boldTexts={["Aquafina.pepsishop.vn"]}
              styleText={_styles.textContent}
              styleBold={[_styles.textContent, { color: Colors.BLUE_400 }]}
              styleView={{ marginStart: -78 }}
            />
          </View>
        </View>
        <View style={_styles.viewStruct}>
          <Image
            source={{ uri: STR_3 }}
            style={{
              width: 80,
              height: 80,
              resizeMode: "stretch",
              marginEnd: 20,
            }}
          />
          <View
            style={{
              width: Dimensions.get("window").width * 0.7,
              marginTop: -10,
            }}
          >
            <Text style={_styles.textTitle}>Bước 3</Text>
            <Text style={_styles.textContent}>
              Đăng nhập hoặc đăng ký để tích điểm vào tài khoản của bạn với cơ
              hội nhận được các phần quà giá trị từ Aquafina.
            </Text>
          </View>
          <Text
            style={{
              position: "absolute",
              fontSize: 5,
              left: 24,
              top: 44,
              color: Colors.RED,
              fontFamily: fontFamily.bold,
            }}
          >
            {stringToShow}
          </Text>
        </View>
        <TextViewBold
          text="Nhấn “XÁC NHẬN” khi bạn đã đọc và hiểu cách thức tham gia"
          boldTexts={["XÁC NHẬN"]}
          styleText={{ fontFamily: fontFamily.bold, textAlign: "center" }}
          styleBold={{ color: Colors.BLUE_TEXT }}
        />
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate("StartRVM");
        }}
        style={{ position: "absolute", bottom: 10, alignSelf: "center" }}
      >
        <Image
          source={{ uri: BTN_CONFIRM }}
          style={{ width: 140, height: 140 }}
        />
      </Pressable>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GREEN,
    flex: 1,
  },

  viewContent: {
    marginHorizontal: 20,
    height: Dimensions.get("window").height * 0.6,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
  },

  viewTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  viewStruct: {
    height: 100,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: Colors.BLUE_10,
    borderRadius: 10,
    marginBottom: 10,
    paddingStart: 10,
    alignItems: "center",
  },

  textTitle: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
    color: Colors.BLUE_600,
  },

  textContent: {
    fontFamily: fontFamily.bold,
    fontSize: 12,
    color: Colors.GREY_5,
    width: Dimensions.get("window").width * 0.5,
  },
});

export const InstructRVM = React.memo(_InstructRVM);
