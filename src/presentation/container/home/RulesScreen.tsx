import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StyleProp,
  TextStyle,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Address,
  Button,
  CarouselView,
  Header,
  ImageView,
  MenuFooter,
  Rating,
  SliderBanner,
  SumBottle,
  TextPlus,
  TextView,
  PopupSignOut,
  PopupSignIn,
  Loading,
} from "@components";
import {
  BACKGROUND_BUTTON_BLUE,
  BACKGROUND_ITEM,
  BACKGROUND_PRE,
  BACKGROUND_RULES,
  BANNER_HOME,
  BANNER_HOME_2,
  BANNER_HOME_3,
  BANNER_HOME_4,
  CONTENT,
  ICON_LOGIN,
  ICON_MENU,
  LOGO_AQUAFINA,
  MAP_1,
  MAP_2,
  MAP_3,
  MAP_4,
  MAP_5,
  MAP_6,
  MAP_7,
  PURE_COIN,
  fontFamily,
} from "@assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackHome } from "@navigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import database from "@react-native-firebase/database";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "@resources";
import { AppContext, getAllPresentRules } from "@shared-state";
import { User, PresentRules } from "@domain";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@shared-state";
import {
  text_1,
  text_2,
  text_3,
  text_4,
  text_5,
  text_6,
  text_7,
  text_8,
  text_9,
  text_10,
  text_11,
  text_12,
  text_13,
  text_14,
  text_15,
  text_16,
  text_17,
} from "@domain";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "RulesScreen"> & {
  navigation: DrawerNavigationProps;
};

const _RulesScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn, setLoggedIn, setDataUser } = React.useContext(AppContext);
  const [modalVisibleSignOut, setModalVisibleSignOut] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const scrollViewRef = React.useRef<ScrollView>(null);
  const dispatch = useAppDispatch();
  const listPresentRules: PresentRules[] = useSelector<
    RootState,
    PresentRules[]
  >((state) => state.rules.presentRules);

  const loadingRules: boolean = useSelector<RootState, boolean>(
    (state) => state.rules.loading
  );

  useEffect(() => {
    dispatch(getAllPresentRules());
  }, []);

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }, []);
  const showDrawerNavigator = () => {
    navigation.openDrawer();
  };

  const goToScreenSignIn = () => {
    if (isLoggedIn) {
      setModalVisibleSignOut(true);
    } else {
      navigation.navigate("SignIn");
    }
  };

  const goToScreenHome = () => {
    navigation.navigate("Home");
    scrollToTop();
  };

  const goToScreenPresent = () => {
    navigation.navigate("Quà Tặng Xanh");
    scrollToTop();
  };

  const goToScreenMap = () => {
    navigation.navigate("Bản Đồ Xanh");
    scrollToTop();
  };

  const goToScreenGreenWorld = () => {
    navigation.navigate("Thế Giới Xanh");
    scrollToTop();
  };

  const goToScreenChart = () => {
    if (isLoggedIn) {
      navigation.navigate("Bảng Xếp Hạng");
      scrollToTop();
    } else {
      setModalVisible(true);
    }
  };

  const goToScreenPoints = () => {
    if (isLoggedIn) {
      navigation.navigate("Điểm Thưởng Xanh");
      scrollToTop();
    } else {
      setModalVisible(true);
    }
  };

  const goToScreenDescriptionWarning = () => {
    navigation.navigate("WarningDescriptionScreen");
    scrollToTop();
  };

  const halfwayIndex = Math.ceil(listPresentRules.length / 2);
  const column1Data = listPresentRules.slice(0, halfwayIndex);
  const column2Data = listPresentRules.slice(halfwayIndex);

  type ItemProps = {
    item: PresentRules;
  };

  const Item = ({ item }: ItemProps) => {
    return (
      <View style={{ height: 340 }}>
        <View key={item.key} style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View style={{ marginHorizontal: 15 }}>
          <Text
            style={{
              textAlign: "left",
              fontFamily: fontFamily.bold,
              color: Colors.BLACK,
              fontSize: 14,
              marginTop: -5,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontFamily: fontFamily.medium,
              color: Colors.BLACK,
              fontSize: 12,
            }}
          >
            Số lượng quà tặng mỗi tuần: {item.quantity}
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontFamily: fontFamily.medium,
              color: Colors.BLACK,
              fontSize: 12,
            }}
          >
            Cách thức đổi quà: {item.method}
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontFamily: fontFamily.medium,
              color: Colors.BLACK,
              fontSize: 12,
            }}
          >
            Giá trị quà tặng (+VAT): {item.value}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ paddingBottom: 56 }}>
      <Header
        icon_home={ICON_MENU}
        icon_aquafina={LOGO_AQUAFINA}
        checkLogin={isLoggedIn}
        styleIconLogout={{ opacity: 1 }}
        onPressLeft={showDrawerNavigator}
        onPressRight={goToScreenSignIn}
        onPressCenter={goToScreenHome}
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <PopupSignIn
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          onPressSignIn={() => {
            setModalVisible(!modalVisible);
            props.navigation.navigate("SignIn");
          }}
        />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSignOut}
      >
        <PopupSignOut
          onPress={() => {
            setModalVisibleSignOut(!modalVisibleSignOut);
          }}
          onPressSignOut={() => {
            setModalVisibleSignOut(!modalVisibleSignOut);
            setLoggedIn(false);
            setDataUser({} as User);
            navigation.navigate("Home");
          }}
          onPressCancel={() => {
            setModalVisibleSignOut(!modalVisibleSignOut);
          }}
        />
      </Modal>
      <ImageView
        uri={BACKGROUND_RULES}
        viewStyle={{
          position: "absolute",
          top: Dimensions.get("window").height * 0.2,
          left: Dimensions.get("window").width * 0.3,
        }}
        imageStyle={{ width: 400, height: 400, resizeMode: "stretch" }}
      />
      <ScrollView>
        <TextView
          title="Thể lệ chương trình"
          textStyle={{
            color: Colors.BLACK,
            textAlign: "left",
            marginStart: 20,
            fontSize: 18,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: 10,
          }}
        />
        <TextView
          title="TÁI SINH CHAI NHỰA - NHẬN QUÀ SỐNG XANH"
          textStyle={{
            color: Colors.BLUE_TEXT,
            marginTop: 10,
            fontSize: 14,
          }}
        />
        <TextView
          title="(Diễn ra từ ngày 17/07/2022 đến hết ngày 17/10/2022)"
          textStyle={{
            color: Colors.GREY_5,
            fontSize: 12,
            textTransform: "none",
          }}
        />
        <TextView
          title="1.	Đối tượng tham gia:"
          textStyle={{
            color: Colors.GREY_RULES,
            textAlign: "left",
            marginStart: 20,
            fontSize: 14,
            textTransform: "none",
            fontFamily: fontFamily.bold,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: 10,
          }}
        />
        <TextView
          title="Chương trình dành cho người chơi là công dân nước Cộng hòa Xã hội chủ nghĩa Việt Nam, và trên 18 tuổi.
        "
          textStyle={{
            color: Colors.GREY_RULES,
            textAlign: "left",
            marginHorizontal: 20,
            fontSize: 13,
            textTransform: "none",
            fontFamily: fontFamily.medium,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        />
        <TextView
          title="2.	Nội dung và thể lệ chi tiết chương trình:"
          textStyle={{
            color: Colors.GREY_RULES,
            textAlign: "left",
            marginStart: 20,
            fontSize: 14,
            textTransform: "none",
            fontFamily: fontFamily.bold,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: 10,
          }}
        />
        <TextView
          title="2.1	Cách thức tham gia chương trình: "
          textStyle={{
            color: Colors.GREY_RULES,
            textAlign: "left",
            marginStart: 20,
            fontSize: 14,
            textTransform: "none",
            fontFamily: fontFamily.italic,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        />
        <TextView
          title="Người chơi tham gia chương trình bằng cách thực hiện theo các bước dưới đây:"
          textStyle={{
            color: Colors.GREY_RULES,
            textAlign: "left",
            marginHorizontal: 20,
            fontSize: 13,
            textTransform: "none",
            fontFamily: fontFamily.medium,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        />
        <View style={{ marginStart: 40, marginEnd: 20, paddingTop: 15 }}>
          <TextPlus children={text_1} />
          <TextView
            title="Tại mỗi Trạm Tái Sinh sẽ có lắp đặt một màn hình LCD (hoặc màn hình điện tử) ghi rõ thông tin hướng dẫn người tham gia thực hiện theo các bước tuần tự để hoàn thành một lượt tham gia."
            textStyle={{
              color: Colors.GREY_RULES,
              textAlign: "left",
              fontSize: 13,
              textTransform: "none",
              fontFamily: fontFamily.medium,
              lineHeight: 17,
            }}
            styleContainer={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginBottom: 10,
            }}
          />
          <TextPlus children={text_2} />
          <TextPlus children={text_3} style={{ marginTop: 10 }} />
          <TextPlus children={text_4} style={{ marginTop: 10 }} />
          <TextView
            title="• Tại mỗi Trạm Tái Sinh sẽ có lắp đặt một màn hình LCD (hoặc màn hình điện tử) ghi rõ thông tin hướng dẫn người tham gia thực hiện theo các bước tuần tự để hoàn thành một lượt tham gia."
            textStyle={{
              color: Colors.GREY_RULES,
              textAlign: "left",
              fontSize: 13,
              textTransform: "none",
              fontFamily: fontFamily.medium,
              lineHeight: 17,
            }}
            styleContainer={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          />
          <TextPlus
            children={text_5}
            style={{ marginTop: 10, marginBottom: 5 }}
          />
          <TextView
            title="Người chơi sẽ được tích lũy điểm Aquafina và điểm Aquafina sẽ được tổng kết mỗi tuần theo tỷ lệ quy đổi điểm như sau: "
            textStyle={{
              color: Colors.GREY_RULES,
              textAlign: "left",
              fontSize: 13,
              textTransform: "none",
              fontFamily: fontFamily.medium,
              lineHeight: 17,
            }}
            styleContainer={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          />
          <TextPlus
            children={text_6}
            style={{ marginTop: 5, marginBottom: 5 }}
          />
          <TextPlus children={text_7} />
          <TextPlus children={text_8} style={{ marginTop: 10 }} />
          <TextView
            title="*Lưu ý: Người chơi vẫn có thể tiếp tục chơi và tích lũy điểm Aquafina ở các tuần tiếp theo để có cơ hội nhận được các phần quà trong thời gian diễn ra chương trình.  "
            textStyle={{
              color: Colors.GREY_RULES,
              textAlign: "left",
              fontSize: 14,
              textTransform: "none",
              fontFamily: fontFamily.bold,
            }}
            styleContainer={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: 3,
            }}
          />
        </View>
        <TextView
          title="2.2	 Những quy định về chương trình:"
          textStyle={{
            color: Colors.GREY_RULES,
            textAlign: "left",
            marginStart: 20,
            fontSize: 14,
            textTransform: "none",
            fontFamily: fontFamily.italic,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        />
        <TextView
          title="• Số điểm Aquafina có được hàng tuần sẽ không được cộng dồn trong suốt thời gian diễn ra chương trình, mà sẽ được tổng kết điểm Aquafina vào mỗi tuần."
          textStyle={{
            color: Colors.GREY_RULES,
            textAlign: "left",
            fontSize: 13,
            textTransform: "none",
            fontFamily: fontFamily.medium,
            lineHeight: 17,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginHorizontal: 20,
          }}
        />
        <TextView
          title="• Quà tặng chỉ được trao bằng hiện vật, không có giá trị quy đổi thành tiền mặt"
          textStyle={{
            color: Colors.GREY_RULES,
            textAlign: "left",
            fontSize: 13,
            textTransform: "none",
            fontFamily: fontFamily.medium,
            lineHeight: 17,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginHorizontal: 20,
          }}
        />
        <TextView
          title="• Do số lượng quà tặng có giới hạn, SPVB có quyền thay đổi quà tặng (về kích thước, màu sắc, sản phẩm) nhưng đảm bảo sẽ giữ nguyên giá trị đã cam kết."
          textStyle={{
            color: Colors.GREY_RULES,
            textAlign: "left",
            fontSize: 13,
            textTransform: "none",
            fontFamily: fontFamily.medium,
            lineHeight: 17,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginHorizontal: 20,
          }}
        />
        <TextView
          title="• Khi chương trình kết thúc, số điểm Aquafina không được sử dụng sẽ không còn giá trị."
          textStyle={{
            color: Colors.GREY_RULES,
            textAlign: "left",
            fontSize: 13,
            textTransform: "none",
            fontFamily: fontFamily.medium,
            lineHeight: 17,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginHorizontal: 20,
          }}
        />
        <TextView
          title="• Chương trình có thể kết thúc sớm khi số lượng quà tặng đã được quy đổi hết."
          textStyle={{
            color: Colors.GREY_RULES,
            textAlign: "left",
            fontSize: 13,
            textTransform: "none",
            fontFamily: fontFamily.medium,
            lineHeight: 17,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginHorizontal: 20,
          }}
        />
        <TextView
          title="• Người chơi chịu các khoản thuế, phí theo quy định của pháp luật khi nhận quà tặng theo chương trình này."
          textStyle={{
            color: Colors.GREY_RULES,
            textAlign: "left",
            fontSize: 13,
            textTransform: "none",
            fontFamily: fontFamily.medium,
            lineHeight: 17,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginHorizontal: 20,
          }}
        />
        <TextView
          title="2.3	 Số lượng quà tặng:"
          textStyle={{
            color: Colors.GREY_RULES,
            textAlign: "left",
            marginStart: 20,
            fontSize: 14,
            textTransform: "none",
            fontFamily: fontFamily.italic,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        />
        <TextView
          title="Số lượng quà tặng và điểm Aquafina cần thiết để quy đổi được quy định chi tiết theo bảng dưới đây"
          textStyle={{
            color: Colors.GREY_RULES,
            textAlign: "left",
            fontSize: 13,
            textTransform: "none",
            fontFamily: fontFamily.medium,
            lineHeight: 17,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginStart: 40,
            marginEnd: 20,
          }}
        />
        <View>
          {loadingRules ? (
            <Loading height={900} />
          ) : (
            <View style={styles.container}>
              <View style={styles.column}>
                {column1Data.map((item, index) => (
                  <Item item={item} key={item.key} />
                ))}
              </View>
              <View style={styles.column}>
                {column2Data.map((item, index) => (
                  <Item item={item} key={item.key} />
                ))}
              </View>
            </View>
          )}
        </View>

        <TextView
          title="2.4 Cách thức nhận quà tặng:"
          textStyle={{
            color: Colors.GREY_RULES,
            textAlign: "left",
            marginStart: 20,
            fontSize: 14,
            textTransform: "none",
            fontFamily: fontFamily.italic,
          }}
          styleContainer={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: -10,
          }}
        />
        <View style={{ marginHorizontal: 20 }}>
          <TextPlus children={text_9} style={{ marginBottom: 5 }} />
          <TextPlus
            children={text_10}
            style={{ marginTop: 10, marginBottom: 5 }}
          />
          <TextPlus
            children={text_11}
            style={{ marginTop: 10, marginBottom: 5 }}
          />
          <TextView
            title="3.	Quy định chung:
            "
            textStyle={{
              color: Colors.GREY_RULES,
              textAlign: "left",
              fontSize: 14,
              textTransform: "none",
              fontFamily: fontFamily.bold,
            }}
            styleContainer={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: 10,
            }}
          />
          <View style={{ marginStart: 10 }}>
            <TextPlus children={text_12} />
            <TextPlus children={text_13} />
            <TextPlus children={text_14} />
            <TextPlus children={text_15} />
            <TextPlus children={text_16} />
            <TextPlus children={text_17} />
          </View>
        </View>
        <Button
          title="Đã hiểu"
          backgroundImage={BACKGROUND_BUTTON_BLUE}
          stylePressable={{ width: 122, marginTop: 20, marginBottom: 10 }}
          onPress={goToScreenPresent}
        />
        <MenuFooter
          onPress1={goToScreenGreenWorld}
          onPress2={goToScreenPresent}
          onPress3={goToScreenMap}
          onPress4={goToScreenPoints}
          onPress5={goToScreenChart}
          onPress6={goToScreenDescriptionWarning}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 20,
  },
  column: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").height * 0.2,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  content: {
    fontSize: 16,
    marginTop: 5,
  },
});

export const RulesScreen = React.memo(_RulesScreen);
