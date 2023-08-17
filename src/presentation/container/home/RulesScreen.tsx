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
import { AppContext } from "@shared-state";
import { User } from "@domain";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "RulesScreen"> & {
  navigation: DrawerNavigationProps;
};

const _RulesScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn, setLoggedIn, setDataUser } = React.useContext(AppContext);
  const [modalVisibleSignOut, setModalVisibleSignOut] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
  };

  const goToScreenPresent = () => {
    navigation.navigate("Quà Tặng Xanh");
  };

  const goToScreenMap = () => {
    navigation.navigate("Bản Đồ Xanh");
  };

  const goToScreenGreenWorld = () => {
    navigation.navigate("Thế Giới Xanh");
  };

  const goToScreenChart = () => {
    if (isLoggedIn) {
      navigation.navigate("Bảng Xếp Hạng");
    } else {
      setModalVisible(true);
    }
  };

  const goToScreenPoints = () => {
    if (isLoggedIn) {
      navigation.navigate("Điểm Thưởng Xanh");
    } else {
      setModalVisible(true);
    }
  };

  const goToScreenDescriptionWarning = () => {
    navigation.navigate("WarningDescriptionScreen");
  };

  interface TEXT {
    bold: boolean;
    contentStyle?: StyleProp<TextStyle>;
    content: string;
  }

  const text_1: TEXT[] = [
    {
      bold: true,
      contentStyle: {
        color: Colors.GREY_RULES,
        textDecorationLine: "underline",
        lineHeight: 17,
      },
      content: "Bước 1:",
    },
    {
      bold: false,
      contentStyle: { lineHeight: 17 },
      content:
        " Người chơi đến các địa điểm lắp đặt máy thu gom vỏ chai nhựa đã qua sử dụng của Aquafina (sau đây được gọi tắt là ",
    },
    {
      bold: true,
      contentStyle: { lineHeight: 17 },
      content: "“Trạm Tái Sinh”",
    },
    {
      bold: false,
      contentStyle: { lineHeight: 17 },
      content: ") để tham gia vào chương trình ",
    },
    {
      bold: true,
      contentStyle: { lineHeight: 16 },
      content: "“Tái sinh chai nhựa – Nhận quà sống xanh”.",
    },
  ];

  const text_2: TEXT[] = [
    {
      bold: true,
      contentStyle: {
        color: Colors.GREY_RULES,
        textDecorationLine: "underline",
        lineHeight: 17,
      },
      content: "Bước 2:",
    },
    {
      bold: false,
      contentStyle: { lineHeight: 17 },
      content: "	Người chơi nhấn vào nút ",
    },
    {
      bold: true,
      contentStyle: { lineHeight: 17 },
      content: "“Bắt đầu”",
    },
    {
      bold: false,
      contentStyle: { lineHeight: 17 },
      content:
        " trên màn hình LCD (hoặc màn hình điện tử, tùy từng Trạm Tái Sinh) để bắt đầu một lượt tham gia.",
    },
  ];

  const text_3: TEXT[] = [
    {
      bold: true,
      contentStyle: {
        color: Colors.GREY_RULES,
        textDecorationLine: "underline",
        lineHeight: 17,
      },
      content: "Bước 3:",
    },
    {
      bold: false,
      contentStyle: { lineHeight: 17 },
      content: " Người chơi bỏ chai nhựa rỗng vào vị trí có ghi ",
    },
    {
      bold: true,
      contentStyle: { lineHeight: 17 },
      content: "“Nhận chai ở đây”",
    },
    {
      bold: false,
      contentStyle: { lineHeight: 17 },
      content: " của máy tại Trạm Tái Sinh và chờ hệ thống xử lý.",
    },
  ];

  const text_4: TEXT[] = [
    {
      bold: true,
      contentStyle: {
        color: Colors.GREY_RULES,
        textDecorationLine: "underline",
        lineHeight: 17,
      },
      content: "Bước 4:",
    },
    {
      bold: false,
      contentStyle: { lineHeight: 17 },
      content:
        "	Sau khi hệ thống xử lý xong, màn hình LCD/điện tử sẽ trả về một mã QR. Người chơi sử dụng điện thoại để quét mã QR trên màn hình để dẫn vào website: ",
    },
    {
      bold: true,
      contentStyle: { lineHeight: 17 },
      content: " http://aquafina.pepsishop.vn/.",
    },
  ];

  const text_5: TEXT[] = [
    {
      bold: false,
      contentStyle: {
        color: Colors.GREY_RULES,
        lineHeight: 17,
      },
      content:
        "• Nếu người chơi đã đăng ký tài khoản, thì khi quét mã QR để dẫn về website: ",
    },
    {
      bold: true,
      contentStyle: { lineHeight: 17 },
      content: " http://aquafina.pepsishop.vn/.",
    },
    {
      bold: false,
      contentStyle: { lineHeight: 17 },
      content:
        " người chơi cần nhập số điện thoại để hệ thống ghi nhận điểm Aquafina của lượt tham gia mới.",
    },
  ];

  const text_6: TEXT[] = [
    {
      bold: true,
      contentStyle: { lineHeight: 17 },
      content: "• Chai Aquafina:",
    },
    {
      bold: false,
      contentStyle: { lineHeight: 17 },
      content:
        " người chơi được ghi nhận 2 điểm Aquafina cho mỗi vỏ chai Aquafina.",
    },
  ];

  const text_7: TEXT[] = [
    {
      bold: true,
      contentStyle: { lineHeight: 17 },
      content: "• Không phải chai Aquafina:",
    },
    {
      bold: false,
      contentStyle: { lineHeight: 17 },
      content: " người chơi được ghi nhận 1 điểm Aquafina cho mỗi vỏ chai.",
    },
  ];

  const text_8: TEXT[] = [
    {
      bold: true,
      contentStyle: {
        color: Colors.GREY_RULES,
        textDecorationLine: "underline",
        lineHeight: 17,
      },
      content: "Bước 5:",
    },
    {
      bold: false,
      contentStyle: { lineHeight: 17 },
      content:
        "	 Mỗi tuần, căn cứ vào số lượng người chơi và điểm Aquafina mà người chơi tích lũy được, SPVB sẽ công bố bảng xếp hạng ",
    },
    {
      bold: true,
      contentStyle: { lineHeight: 17 },
      content: "400 người",
    },
    {
      bold: false,
      contentStyle: { lineHeight: 17 },
      content:
        " chơi có điểm Aquafina cao nhất (được hiển thị đầy đủ trên bảng xếp hạng tại website",
    },
    {
      bold: true,
      contentStyle: { lineHeight: 17 },
      content: " http://aquafina.pepsishop.vn/",
    },
    {
      bold: false,
      contentStyle: { lineHeight: 17 },
      content: " và trên fanpage",
    },
    {
      bold: true,
      contentStyle: { lineHeight: 17 },
      content: " https://www.facebook.com/Aquafinavietnam)",
    },
    {
      bold: false,
      contentStyle: { lineHeight: 17 },
      content:
        " vào lúc 12h00’ giờ ngày thứ 7 hàng tuần (hoặc một thời gian khác theo quyết định của Công ty TNHH Nước giải khát Suntory PepsiCo Việt Nam - SPVB) trong thời gian diễn ra chương trình.",
    },
  ];

  const text_9: TEXT[] = [
    {
      bold: false,
      contentStyle: {
        color: Colors.GREY_RULES,
        lineHeight: 17,
      },
      content:
        "• Mỗi tuần SPVB sẽ công bố danh sách 400 người chơi có điểm Aquafina cao nhất và quà tặng trên fanpage Aquafina và trên website ",
    },
    {
      bold: true,
      contentStyle: { lineHeight: 17 },
      content:
        "http://aquafina.pepsishop.vn/  vào lúc 12h00’ giờ ngày thứ 7 hàng tuần trong thời gian diễn ra chương trình",
    },
    {
      bold: false,
      contentStyle: { lineHeight: 17 },
      content:
        " người chơi cần cung cấp thông tin cá nhân cho SPVB theo hướng dẫn trong vòng 7 ngày kể từ ngày đổi quà để được hướng dẫn nhận quà tặng. Việc người chơi cung cấp thông tin cá nhân cho SPVB theo mục đích này được hiểu là hành động cho phép SPVB thu thập và sử dụng thông tin cá nhân của người chơi theo mục địch đã nêu. Trong mọi trường hợp, việc người chơi gửi thông tin nhận quà sau thời gian quy định là không hợp lệ, và được xem là người chơi từ bỏ việc nhận quà.",
    },
  ];

  const text_10: TEXT[] = [
    {
      bold: false,
      contentStyle: {
        color: Colors.GREY_RULES,
        lineHeight: 17,
      },
      content:
        "• Quà tặng sẽ được vận chuyển đến địa chỉ mà người chơi đã cung cấp khi Bên thứ 3 – phụ trách việc vận chuyển quà cho SPVB  trong vòng 30 ngày kể từ ngày kết thúc chương trình. Trong trường hợp bất khả kháng như thiên tai, dịch bệnh, việc vận chuyển có thể bị ảnh hưởng và thời gian trao quà sẽ kéo dài hơn so với thời hạn đã cam kết nêu trên. SPVB sẽ không chịu trách nhiệm nếu thông tin nhận quà mà người chơi cung cấp không chính xác. Người chơi có trách nhiệm ký tên trên phiếu giao hàng, biên bản bàn giao quà tặng, vận đơn bưu điện hoặc một tài liệu có tên gọi khác nhằm xác định đã nhận quà từ chương trình.",
    },
  ];

  const text_11: TEXT[] = [
    {
      bold: false,
      contentStyle: {
        color: Colors.GREY_RULES,
        lineHeight: 17,
      },
      content:
        "• Mỗi cá nhân có quyền thắng nhiều hơn 1 giải trong thời gian diễn ra chương trình với điều kiện không thắng giải trong cùng 1 thời điểm.",
    },
  ];

  const text_12: TEXT[] = [
    {
      bold: false,
      contentStyle: {
        color: Colors.GREY_RULES,
        lineHeight: 17,
      },
      content:
        "SPVB có quyền cập nhật và thay đổi thể lệ chương trình này để phù hợp hơn với người chơi và thông báo công khai đến người chơi. Trong trường hợp có sự thay đổi về thể lệ cũng như thời gian tổ chức, SPVB sẽ thông báo trên trang fanpage của chương trình tại ",
    },
    {
      bold: true,
      contentStyle: { lineHeight: 17 },
      content: "https://www.facebook.com/Aquafinavietnam",
    },
  ];

  const text_13: TEXT[] = [
    {
      bold: false,
      contentStyle: {
        color: Colors.GREY_RULES,
        lineHeight: 17,
      },
      content:
        "Mọi thắc mắc liên quan đến chương trình, người chơi có thể nhắn tin vào hộp thư trang fan page của chương trình tại: ",
    },
    {
      bold: true,
      contentStyle: { lineHeight: 17 },
      content: "https://www.facebook.com/Aquafinavietnam ",
    },
    {
      bold: false,
      contentStyle: {
        color: Colors.GREY_RULES,
        lineHeight: 17,
      },
      content:
        "hoặc gọi điện theo số tổng đài 19001220. SPVB chỉ chịu trách nhiệm giải quyết những khiếu nại, tranh chấp được gửi đến SPVB trong thời hạn từ lúc bắt đầu chương trình cho đến khi hoàn tất việc trao quà tặng cho người chơi quy đổi quà tặng hợp lệ theo quy định tại Điều 2.4 nêu trên. Trong mọi trường hợp, nếu có tranh chấp về việc thực chương trình (bao gồm nhưng không giới hạn việc xác định người chơi chiến thắng theo bảng xếp hạng tuần, quy đổi quà tặng hợp lệ), thì quyền quyết định cuối cùng sẽ thuộc về SPVB.",
    },
  ];

  const text_14: TEXT[] = [
    {
      bold: false,
      contentStyle: {
        color: Colors.GREY_RULES,
        lineHeight: 17,
      },
      content:
        "SPVB cam kết thực hiện đúng và hoàn toàn chịu trách nhiệm về chương trình trên theo các qui định của pháp luật hiện hành.",
    },
  ];

  const text_15: TEXT[] = [
    {
      bold: false,
      contentStyle: {
        color: Colors.GREY_RULES,
        lineHeight: 17,
      },
      content:
        "Phù hợp với qui định của pháp luật, SPVB có quyền chấm dứt hoặc huỷ chương trình này trong trường hợp bất khả kháng và sẽ thông báo công khai phù hợp với quy định pháp luật.",
    },
  ];

  const text_16: TEXT[] = [
    {
      bold: false,
      contentStyle: {
        color: Colors.GREY_RULES,
        lineHeight: 17,
      },
      content:
        "Nếu phát hiện có dấu hiệu gian lận, sử dụng công cụ, phần mềm hỗ trợ, tài khoản của người chơi sẽ bị khóa đến hết thời gian diễn ra chương trình, mọi quà tặng sẽ bị thu hồi.",
    },
  ];
  const text_17: TEXT[] = [
    {
      bold: false,
      contentStyle: {
        color: Colors.GREY_RULES,
        lineHeight: 17,
      },
      content:
        "Bằng việc sử dụng Các Dịch Vụ, đăng ký một tài khoản với chúng tôi hoặc truy cập Nền tảng, người chơi xác nhận và đồng ý rằng người chơi chấp nhận các phương pháp, yêu cầu, và/hoặc chính sách được mô tả trong Chính sách bảo mật này, và theo đây bạn đồng ý cho phép chúng tôi thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân của bạn cho mục đích thương mại.",
    },
  ];

  const halfwayIndex = Math.ceil(DATA.length / 2);
  const column1Data = DATA.slice(0, halfwayIndex);
  const column2Data = DATA.slice(halfwayIndex);

  interface Present {
    key: number;
    title: string;
    quantity: number;
    method: string;
    value: string;
    image: string;
  }

  type ItemProps = {
    item: Present;
  };

  const Item = ({ item }: ItemProps) => {
    return (
      <View>
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

const DATA = [
  {
    key: 1,
    title: "Áo khoác cape Aquafina x Headless",
    quantity: 6,
    method: "Trao cho 6 người có điểm Aquaffina cao nhất",
    value: "1.200.000 đồng/ áo",
    image: MAP_1,
  },
  {
    key: 2,
    title: "Áo thun Aquafina x Repeet",
    quantity: 100,
    method:
      "Trao ngẫu nhiên cho 100 người trong tổng số 388 người có điểm Aquafina cao nhất còn lại",
    value: "200.000 đồng/ áo",
    image: MAP_3,
  },
  {
    key: 3,
    title: "Vớ Aquafina x Repeet",
    quantity: 100,
    method:
      "Trao ngẫu nhiên cho 100 người trong tổng số 200 người có điểm Aquafina cao nhất còn lại",
    value: "50.000 đồng/ đôi vớ",
    image: MAP_5,
  },
  {
    key: 4,
    title: "Voucher xem phim tại rạp chiếu phim Lotte",
    quantity: 100,
    method:
      "Trao ngẫu nhiên cho 100 người trong tổng số 200 người có điểm Aquafina cao nhất còn lại",
    value: "200.000 đồng/ voucher",
    image: MAP_7,
  },
  {
    key: 5,
    title: "Túi Tote Aquafina x Headless",
    quantity: 6,
    method: "Trao cho 6 người có điểm Aquaffina cao nhì",
    value: "800.000 đồng/ túi",
    image: MAP_2,
  },

  {
    key: 6,
    title: "Nón Aquafina x Repeet",
    quantity: 88,
    method:
      "Trao ngẫu nhiên cho 88 người trong tổng số 288 người có điểm Aquafina cao nhất còn lại",
    value: "200.000 đồng/ nón",
    image: MAP_4,
  },

  {
    key: 7,
    title: "Túi Tote",
    quantity: 80,
    method:
      "Trao ngẫu nhiên cho 100 người trong tổng số 100 người có điểm Aquafina cao nhất còn lại",
    value: "200.000 đồng/ túi",
    image: MAP_6,
  },
];
