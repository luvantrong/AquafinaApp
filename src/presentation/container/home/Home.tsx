import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Address,
  Banner,
  Button,
  CarouselView,
  Header,
  ImageView,
  MenuFooter,
  Rating,
  SliderBanner,
  SumBottle,
  TextPlus,
} from "@components";
import {
  BANNER_HOME,
  BANNER_HOME_2,
  BANNER_HOME_3,
  BANNER_HOME_4,
  ICON_LOGIN,
  ICON_MENU,
  LOGO_AQUAFINA,
  PURE_COIN,
} from "@assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackHome } from "@navigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

type DrawerNavigationProps = DrawerNavigationProp<StackHome>;
type PropsType = NativeStackScreenProps<StackHome, "Home"> & {
  navigation: DrawerNavigationProps;
};

const _Home: React.FC<PropsType> = (props) => {
  const { navigation } = props;

  interface Rating {
    key: number;
    name: string;
    places: number;
  }

  interface User {
    phoneNumber: string;
  }

  const [listRating, setListRating] = useState<Rating[]>([]);

  interface Product {
    key: string;
    name: string;
    places: number;
  }
  const firebaseConfig = {
    apiKey: "AIzaSyBqFe3zBsohPtGFe7v6Zkhr9KjRekePEzc",
    authDomain: "aquafinaapp-bc817.firebaseapp.com",
    databaseURL: "https://aquafinaapp-bc817-default-rtdb.firebaseio.com",
    projectId: "aquafinaapp-bc817",
    storageBucket: "aquafinaapp-bc817.appspot.com",
    messagingSenderId: "38217348221",
    appId: "1:38217348221:web:15d97749975ecc2f332d14",
    measurementId: "G-EVGFZKE48N",
  };

  let firestore: firebase.firestore.Firestore;

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firestore = firebase.firestore();
  }

  // useEffect(() => {
  //   const getRatings = async () => {
  //     try {
  //       const snapshot = await firestore.collection("ratings").get();
  //       const products: Product[] = snapshot.docs.map((doc) => {
  //         const data = doc.data() as Product;
  //         const key = doc.id;
  //         return { ...data, key };
  //       });
  //       // Do something with the products
  //       console.log("products", products);
  //     } catch (error) {
  //       console.log("Error getting ratings:", error);
  //     }
  //   };

  //   getRatings();
  // }, []);

  // useEffect(() => {
  //   const addUser = async () => {
  //     try {
  //       const user = { name: "ABC", phone: "09433224" };
  //       const docRef = await firestore.collection("users").add(user);
  //       console.log("User added with ID:", docRef.id);
  //     } catch (error) {
  //       console.error("Error adding user:", error);
  //     }
  //   };

  //   addUser();
  // }, []);


  const showDrawerNavigator = () => {
    navigation.openDrawer();
  };

  const goToScreenSignIn = () => {
    navigation.navigate("SignIn");
  };

  const goToScreenHome = () => {
    navigation.navigate("Home");
  };

  const goToScreenPresent = () => {
    navigation.navigate("PresentScreen");
  };

  const goToScreenMap = () => {
    navigation.navigate("MapScreen");
  };

  const goToScreenGreenWorld = () => {
    navigation.navigate("GreenWorldScreen");
  };

  const goToScreenChart = () => {
    navigation.navigate("ChartScreen");
  };

  const goToScreenPoints = () => {
    navigation.navigate("PointsScreen");
  };

  const goToScreenDescriptionWarning = () => {
    navigation.navigate("WarningDescriptionScreen");
  };

  const handleToScreen = (screen: any) => {
    switch (screen) {
      case "Thế Giới Xanh":
        navigation.navigate("GreenWorldScreen");
        break;
      case "Quà Tặng Xanh":
        navigation.navigate("PresentScreen");
        break;
      default:
        break;
    }
  };
  return (
    <SafeAreaView>
      <Header
        icon_home={ICON_MENU}
        icon_aquafina={LOGO_AQUAFINA}
        icon_logout={ICON_LOGIN}
        styleIconLogout={{ opacity: 1 }}
        onPressLeft={showDrawerNavigator}
        onPressRight={goToScreenSignIn}
        onPressCenter={goToScreenHome}
      />
      <ScrollView
        style={{ marginBottom: 55 }}
        showsVerticalScrollIndicator={false}
      >
        <SliderBanner checkSignIn={true} data={DATA} onPress={handleToScreen} />
        <SumBottle sumAqua={200000} sumOther={100000} />
        <View style={{ marginTop: -10 }}>
          <Rating checkSignIn={false} />
        </View>
        <CarouselView onPress={goToScreenPresent} check={false} />
        <Address onPress={goToScreenMap} uri={PURE_COIN} check={false} />
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

const _styles = StyleSheet.create({});

const DATA: Banner[] = [
  {
    id: 1,
    image: BANNER_HOME,
    screen: "Thế Giới Xanh",
  },
  {
    id: 2,
    image: BANNER_HOME_2,
    screen: "Thế Giới Xanh",
  },
  {
    id: 3,
    image: BANNER_HOME_3,
    screen: "Thế Giới Xanh",
  },
  {
    id: 4,
    image: BANNER_HOME_4,
    screen: "Quà Tặng Xanh",
  },
];

export const Home = React.memo(_Home);
