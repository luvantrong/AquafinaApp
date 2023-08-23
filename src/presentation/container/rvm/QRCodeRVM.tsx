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
  PopupThankyou,
  PopupTimeup,
  TextView,
  TextViewBold,
} from "@components";
import {
  BG_QR,
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
  QR_COMPLETE,
  fontFamily,
} from "@assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackRVM } from "@navigation";

type PropsType = NativeStackScreenProps<StackRVM, "QRCodeRVM">;

const _QRCodeRVM: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const [title, setTitle] = React.useState("TRẠM TÁI SINH CỦA AQUAFINA");
  const [opacity, setOpacity] = React.useState(1);
  const [visibleTimeup, setVisibleTimeup] = useState(false);
  const [visibleThankyou, setVisibleThankyou] = useState(false);
  const [checkComplete, setCheckComplete] = useState(false);

  useEffect(() => {
    const setTiomeoutAuto = setTimeout(() => {
      setTitle("QUÉT QR TÍCH ĐIỂM");
      setOpacity(0);
    }, 5000);

    return () => {
      clearTimeout(setTiomeoutAuto);
    };
  }, []);

  useEffect(() => {
    if (checkComplete == false) {
      const setTiomeoutPopupTimeout = setTimeout(() => {
        setVisibleTimeup(true);
      }, 20000);

      return () => {
        clearTimeout(setTiomeoutPopupTimeout);
      };
    }
  }, [checkComplete]);

  useEffect(() => {
    if (checkComplete == false) {
      const setTiomeoutPopupTimeout = setTimeout(() => {
        navigation.push("HomeRVM");
      }, 30000);

      return () => {
        clearTimeout(setTiomeoutPopupTimeout);
      };
    }
  }, [checkComplete]);

  useEffect(() => {
    if (checkComplete == true && visibleThankyou == true) {
      const setTiomeoutPopupTimeout = setTimeout(() => {
        navigation.push("HomeRVM");
      }, 5000);

      return () => {
        clearTimeout(setTiomeoutPopupTimeout);
      };
    }
  }, [checkComplete]);

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
      <Modal animationType="slide" transparent={true} visible={visibleThankyou}>
        <PopupThankyou
          onPress={() => {
            setVisibleThankyou(false);
            navigation.navigate("HomeRVM");
          }}
        />
      </Modal>
      <TextView title={title} styleContainer={{ marginTop: 10 }} />
      <View style={_styles.containerView1}>
        <TextView
          title="Điểm quy đổi:"
          textStyle={{
            textTransform: "none",
            fontSize: 14,
          }}
        />
        <TextView
          title="10"
          textStyle={{
            textTransform: "none",
            fontSize: 44,
          }}
        />
      </View>
      <View style={_styles.containerView2}>
        <Image
          source={{ uri: BG_QR }}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "stretch",
            position: "absolute",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <Pressable>
            <Image
              source={{ uri: LEFT_CIRCLE }}
              style={{ width: 30, height: 30, opacity: opacity }}
            />
          </Pressable>

          <Image
            source={{ uri: LOGO_STRUCT }}
            style={{ width: 60, height: 46, resizeMode: "stretch" }}
          />
        </View>
        <TextViewBold
          text="Quét mã QR code để 
truy cập vào trang chủ Aquafina.pepsishop.com 
và tích điểm đổi quà!"
          boldTexts={["Aquafina.pepsishop.com"]}
          styleView={{
            width: "70%",
            alignSelf: "center",
            marginTop: -20,
          }}
          styleText={{
            fontFamily: fontFamily.medium,
            color: Colors.GREY_5,
            textAlign: "center",
          }}
          styleBold={{ color: Colors.BLUE_TEXT, fontFamily: fontFamily.medium }}
        />
        <Image
          source={{ uri: QR_COMPLETE }}
          style={{
            width: 150,
            height: 150,
            alignSelf: "center",
            marginVertical: 15,
          }}
        />
        <TextViewBold
          text="Thời gian quét QR còn: 30 GIÂY NỮA"
          boldTexts={["30 GIÂY NỮA"]}
          styleText={{
            fontFamily: fontFamily.bold,
            textAlign: "center",
            marginBottom: 10,
          }}
          styleBold={{ color: Colors.RED }}
        />
      </View>
      <Pressable
        onPress={() => {
          setVisibleThankyou(true);
          setCheckComplete(true);
        }}
        style={{ position: "absolute", bottom: 30, alignSelf: "center" }}
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

  containerView1: {
    marginHorizontal: 20,
    backgroundColor: Colors.WHITE,
    height: 70,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: 10,
    paddingEnd: 40,
  },

  containerView2: {
    marginHorizontal: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
});

export const QRCodeRVM = React.memo(_QRCodeRVM);
