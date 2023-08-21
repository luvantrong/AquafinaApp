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
import { Header, ImageView, TextViewBold } from "@components";
import {
  BTN_START,
  CONTENT,
  FB_RVM,
  ICON_HOME,
  IMAGE_BOTTOM_LOGIN,
  IMG_RVM_HOME,
  LOGO_AQUAFINA,
  QR_CODE,
  fontFamily,
} from "@assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackRVM } from "@navigation";

type PropsType = NativeStackScreenProps<StackRVM, "HomeRVM">;

const _HomeRVM: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  return (
    <View style={_styles.container}>
      <Header
        icon_aquafina={LOGO_AQUAFINA}
        icon_home={ICON_HOME}
        styleIconHome={{ opacity: 0 }}
      />
      <Image source={{ uri: CONTENT }} style={_styles.img_1} />
      <Image source={{ uri: IMG_RVM_HOME }} style={_styles.img_2} />
      <View style={_styles.viewBottom}>
        <View style={_styles.viewBottomChildren}>
          <Image source={{ uri: FB_RVM }} style={_styles.imgFB} />
          <Text style={_styles.textStyle}>Aquafina Vietnam</Text>
        </View>
        <Text style={_styles.textStyle}>Aquafina.pepsishop.vn</Text>
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate("InstructRVM");
        }}
        style={_styles.viewStart}
      >
        <Image source={{ uri: BTN_START }} style={_styles.btnStart} />
      </Pressable>
      <View style={{ position: "absolute", alignSelf: "center", bottom: 55 }}>
        <Text
          style={{
            fontFamily: fontFamily.medium,
            color: Colors.BLUE_TEXT,
            textAlign: "center",
            fontSize: 10,
          }}
        >
          *Hoạt động nằm trong Chiến dịch
        </Text>
        <TextViewBold
          text="Sải bước phong cách Xanh của Aquafina"
          boldTexts={["Xanh"]}
          styleText={{
            fontFamily: fontFamily.bold,
            color: Colors.BLUE_TEXT,
            fontSize: 10,
          }}
          styleBold={{
            fontFamily: fontFamily.bold,
            color: Colors.GREEEN_2,
            fontSize: 10,
          }}
        />
      </View>
      <Image source={{ uri: QR_CODE }} style={_styles.imgQRCode} />
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GREEN,
    flex: 1,
  },
  img_1: {
    width: Dimensions.get("window").width * 0.75,
    height: Dimensions.get("window").height * 0.24,
    resizeMode: "stretch",
    alignSelf: "center",
    marginStart: -20,
    marginTop: -30,
  },
  img_2: {
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").height * 0.92,
    resizeMode: "stretch",
    alignSelf: "center",
    position: "absolute",
    bottom: 15,
  },

  viewBottom: {
    width: Dimensions.get("window").width * 1,
    height: 35,
    backgroundColor: Colors.BLUE_KV,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },

  viewBottomChildren: {
    flexDirection: "row",
    alignItems: "center",
  },

  imgFB: {
    width: 20,
    height: 20,
    resizeMode: "stretch",
    marginEnd: 5,
  },

  textStyle: {
    color: Colors.WHITE,
    fontFamily: fontFamily.medium,
    fontSize: 12,
  },

  btnStart: {
    width: 160,
    height: 150,
    resizeMode: "stretch",
  },

  viewStart: {
    position: "absolute",
    alignSelf: "center",
    bottom: 80,
  },

  imgQRCode: {
    width: 66,
    height: 83,
    position: "absolute",
    right: 10,
    bottom: 50,
  },
});

export const HomeRVM = React.memo(_HomeRVM);
