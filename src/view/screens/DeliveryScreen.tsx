import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useAppSelector } from "../../lib/hooks/useAppSelector";
import { selectRestaurant } from "../../state/basketSlice";

const DeliveryScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { lat, lon, title, description } = useAppSelector(selectRestaurant);

  const handlePress = async () => {
    const url = "http://t.me/ihorriabenko1";

    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(
        "Telegram not available",
        "Please install Telegram or use an alternative contact method.",
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: "#00CCBB",
      }}
    >
      <TouchableOpacity
        style={s.iconButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="ios-close" size={28} color="white" />
      </TouchableOpacity>
      <View style={s.infoWrapper}>
        <View style={s.info}>
          <View>
            <Text style={s.arrival}>Estimated Arrival</Text>
            <Text style={s.time}>45-55 Minutes</Text>
          </View>
          <Image
            style={s.image}
            source={require("../../../assets/images/giphy.gif")}
          />
        </View>
        <Progress.Bar
          progress={0.4}
          indeterminate={true}
          width={200}
          color="#00CCBB"
        />
        <Text style={s.orderText}>
          Your order at "{title}" is being prepared
        </Text>
      </View>
      <MapView
        initialRegion={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="mutedStandard"
        style={{ flex: 1 }}
      >
        <Marker
          coordinate={{
            latitude: lat,
            longitude: lon,
          }}
          title={title}
          description={description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <View style={s.footer}>
        <View style={s.riderWrapper}>
          <Image
            source={require("../../../assets/images/wru.png")}
            style={s.driverImage}
          />
          <View>
            <Text style={s.riderName}>Ihor Riabenko</Text>
            <Text>Your Rider</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handlePress}>
          <Text style={s.call}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  iconButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  infoWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 15,

    backgroundColor: "white",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrival: {
    marginBottom: 5,

    fontSize: 17,
    color: "#6e6e73",
  },
  time: {
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width: 80,
    height: 80,
  },
  orderText: {
    marginTop: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  riderWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  driverImage: {
    marginRight: 7,

    width: 40,
    height: 40,
    borderRadius: 99,
  },
  riderName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  call: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default DeliveryScreen;
