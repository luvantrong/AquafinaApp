import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { Colors } from "@resources";
import { Header, ImageView, TextView, TextViewBold } from "@components";
import {
  BTN_START,
  CONTENT,
  FB_RVM,
  ICON_HOME,
  IMAGE_BOTTOM_LOGIN,
  IMG_RVM_HOME,
  LOGO_AQUAFINA,
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
  return (
    <View style={_styles.container}>
      <Header
        icon_aquafina={LOGO_AQUAFINA}
        icon_home={ICON_HOME}
        styleIconHome={{ opacity: 0 }}
      />
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
        <TextViewBold
          text="Quét mã QR code để 
truy cập vào trang chủ Aquafina.pepsishop.com 
và tích điểm đổi quà!"
          boldTexts={["Aquafina.pepsishop.com"]}
          styleView={{
            width: "70%",
            alignSelf: "center",
            marginTop: 20,
          }}
          styleText={{
            fontFamily: fontFamily.medium,
            color: Colors.GREY_5,
          }}
          styleBold={{ color: Colors.BLUE_TEXT, fontFamily: fontFamily.medium }}
        />
        <Image
          source={{ uri: QR_COMPLETE }}
          style={{
            width: 150,
            height: 150,
            alignSelf: "center",
            marginVertical: 10,
          }}
        />
      </View>
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
