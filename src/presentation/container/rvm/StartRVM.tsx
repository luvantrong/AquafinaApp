import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@resources";
import {
  Header,
  ImageView,
  PopupTimeup,
  TextView,
  TextViewBold,
} from "@components";
import {
  AQUA_2,
  BG_START_RVM,
  BTN_COMPLTETE_1,
  BTN_COMPLTETE_2,
  BTN_CONFIRM,
  BTN_START,
  BTN_STOP,
  CONTENT,
  ECLIP_POINT,
  FB_RVM,
  ICON_HOME,
  IMAGE_BOTTOM_LOGIN,
  IMG_RVM_HOME,
  LEFT_CIRCLE,
  LOGO_AQUAFINA,
  LOGO_STRUCT,
  OTHER_2,
  QR_CODE,
  STR_1,
  STR_2,
  STR_3,
  fontFamily,
} from "@assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackRVM } from "@navigation";

type PropsType = NativeStackScreenProps<StackRVM, "StartRVM">;

const _StartRVM: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const [textTitle, setTextTitle] = useState("HÃY CHO CHAI RỖNG VÀO MÁY");

  const [check, setCheck] = useState(false);

  const [btnHandle, setBtnHandle] = useState(BTN_STOP);

  const [type, setType] = useState(0);

  const [visibleTimeup, setVisibleTimeup] = useState(false);

  useEffect(() => {
    const setTiomeoutAuto = setTimeout(() => {
      setTextTitle("CHAI NHỰA ĐANG ĐƯỢC XỬ LÝ...");
      setCheck(true);
      setBtnHandle(BTN_COMPLTETE_1);
      setType(1);
    }, 5000);

    return () => {
      clearTimeout(setTiomeoutAuto);
    };
  }, []);

  useEffect(() => {
    const setTiomeoutHandle = setTimeout(() => {
      setBtnHandle(BTN_COMPLTETE_2);
      setType(2);
    }, 8000);

    return () => {
      clearTimeout(setTiomeoutHandle);
    };
  }, []);

  useEffect(() => {
    const setTiomeoutPopupTimeout = setTimeout(() => {
      setVisibleTimeup(true);
    }, 15000);

    return () => {
      clearTimeout(setTiomeoutPopupTimeout);
    };
  }, []);

  useEffect(() => {
    const setTiomeoutGoToHomeRVM = setTimeout(() => {
      setVisibleTimeup(false);
      navigation.navigate("HomeRVM");
    }, 25000);

    return () => {
      clearTimeout(setTiomeoutGoToHomeRVM);
    };
  }, []);

  useEffect(() => {
    const setTiomeoutGoToHomeRVM = setTimeout(() => {
      navigation.navigate("HomeRVM");
    }, 30000);

    return () => {
      clearTimeout(setTiomeoutGoToHomeRVM);
    };
  }, []);

  console.log("type", type);

  return (
    <View style={_styles.container}>
      <Header
        icon_aquafina={LOGO_AQUAFINA}
        icon_home={ICON_HOME}
        styleIconHome={{ opacity: 0 }}
      />
      <Modal animationType="slide" transparent={true} visible={visibleTimeup}>
        <PopupTimeup
          onPress={() => {
            navigation.navigate("HomeRVM");
          }}
          onPressPlus={() => {
            setVisibleTimeup(false);
          }}
        />
      </Modal>
      <TextView title={textTitle} />
      <View style={[_styles.viewContent, { display: check ? "flex" : "none" }]}>
        <View style={_styles.viewTop}>
          <Image
            source={{ uri: BG_START_RVM }}
            style={{
              width: Dimensions.get("window").width * 0.85,
              height: Dimensions.get("window").height * 0.5,
              resizeMode: "stretch",
              position: "absolute",
              top: 50,
            }}
          />
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
        <View style={{ alignSelf: "center", marginTop: 20, marginBottom: 40 }}>
          <Image
            source={{ uri: ECLIP_POINT }}
            style={{
              width: 170,
              height: 170,
            }}
          />
          <View
            style={{ position: "absolute", alignSelf: "center", marginTop: 35 }}
          >
            <Text
              style={{
                color: Colors.BLUE_KV,
                fontSize: 45,
                fontFamily: fontFamily.bold,
                textAlign: "center",
              }}
            >
              30
            </Text>
            <Text
              style={{
                color: Colors.BLUE_300,
                fontSize: 20,
                fontFamily: fontFamily.bold,
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              điểm
            </Text>
          </View>
        </View>

        <View style={_styles.viewTK}>
          <View style={_styles.imgTK}>
            <Image
              source={{ uri: AQUA_2 }}
              style={{ width: 50, height: 50, marginEnd: 10 }}
            />
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: fontFamily.bold,
                  fontSize: 12,
                  color: Colors.BLUE_400,
                }}
              >
                AQUAFINA
              </Text>
              <Text
                style={{
                  fontFamily: fontFamily.bold,
                  fontSize: 20,
                  color: Colors.RED,
                  marginTop: -5,
                  marginBottom: -5,
                }}
              >
                1
              </Text>
              <Text
                style={{
                  fontFamily: fontFamily.bold,
                  fontSize: 10,
                  color: Colors.BLUE_400,
                }}
              >
                chai
              </Text>
            </View>
          </View>
          <View style={_styles.imgTK}>
            <Image
              source={{ uri: OTHER_2 }}
              style={{ width: 50, height: 50, marginEnd: 10 }}
            />
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: fontFamily.bold,
                  fontSize: 12,
                  color: Colors.BLUE_400,
                }}
              >
                CHAI KHÁC
              </Text>
              <Text
                style={{
                  fontFamily: fontFamily.bold,
                  fontSize: 20,
                  color: Colors.RED,
                  marginTop: -5,
                  marginBottom: -5,
                }}
              >
                4
              </Text>
              <Text
                style={{
                  fontFamily: fontFamily.bold,
                  fontSize: 10,
                  color: Colors.BLUE_400,
                }}
              >
                chai
              </Text>
            </View>
          </View>
        </View>

        <TextViewBold
          text="Tự động kết thúc sau: 30 GIÂY NỮA"
          boldTexts={["30 GIÂY NỮA"]}
          styleText={{ fontFamily: fontFamily.bold, textAlign: "center" }}
          styleBold={{ color: Colors.RED }}
        />
      </View>
      <View
        style={[_styles.viewContent, { display: !check ? "flex" : "none" }]}
      >
        <View style={_styles.viewTop}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={{ uri: BG_START_RVM }}
              style={{
                width: Dimensions.get("window").width * 0.85,
                height: Dimensions.get("window").height * 0.5,
                resizeMode: "stretch",
                position: "absolute",
                top: 50,
              }}
            />

            <Text
              style={{
                fontSize: 13,
                fontFamily: fontFamily.bold,
                color: Colors.BLUE_KV,
                textDecorationLine: "underline",
              }}
            >
              Xem lại hướng dẫn
            </Text>
          </Pressable>
          <Image
            source={{ uri: LOGO_STRUCT }}
            style={{ width: 65, height: 45, resizeMode: "stretch" }}
          />
        </View>
        <Image
          source={{ uri: STR_1 }}
          style={{
            width: 270,
            height: 270,
            resizeMode: "stretch",
            alignSelf: "center",
          }}
        />
        <TextView
          title="Lần lượt bỏ từng chai nhựa rỗng vào ô bên trái "
          textStyle={{
            textTransform: "none",
            fontSize: 14,
            color: Colors.GREY_5,
            textAlign: "center",
          }}
          styleContainer={{
            width: Dimensions.get("window").width * 0.6,
            alignSelf: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
        />
        <TextViewBold
          text="Tự động kết thúc sau: 30 GIÂY NỮA"
          boldTexts={["30 GIÂY NỮA"]}
          styleText={{
            fontFamily: fontFamily.bold,
            textAlign: "center",
          }}
          styleBold={{ color: Colors.RED }}
        />
      </View>

      <Pressable
        onPress={() => {
          if (type == 0) {
            navigation.goBack();
          } else if (type == 1) {
            console.log("type 1");
          } else if (type == 2) {
            console.log("type 2");
          }
        }}
        style={{ position: "absolute", bottom: 10, alignSelf: "center" }}
      >
        <Image
          source={{ uri: btnHandle }}
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
    display: "flex",
  },

  viewContent2: {
    marginHorizontal: 20,
    height: Dimensions.get("window").height * 0.6,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
    display: "none",
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

  viewTK: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 30,
  },

  imgTK: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.BLUE_10,
    borderRadius: 10,
    paddingHorizontal: 5,
    justifyContent: "space-between",
    paddingEnd: 10,
    paddingVertical: 5,
  },
});

export const StartRVM = React.memo(_StartRVM);
