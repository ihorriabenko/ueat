import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { clearBasket } from "../../state/basketSlice";
import { useAppDispatch } from "../../lib/hooks/useAppDispatch";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const positionAnim = useRef(new Animated.Value(50)).current;
  const blinkAnim = useRef(new Animated.Value(1)).current;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(positionAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(blinkAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(blinkAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    });

    setTimeout(() => navigation.navigate("Delivery"), 4000);

    return () => {
      dispatch(clearBasket());
    };
  }, [fadeAnim, positionAnim, blinkAnim]);

  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={require("../../../assets/images/preparingOrder.gif")}
      />
      <Animated.Text
        style={[
          s.text,
          {
            opacity: blinkAnim,
            transform: [{ translateY: positionAnim }],
          },
        ]}
      >
        Waiting for Restaurant to accept your order!
      </Animated.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00CCBB",
  },
  image: {
    marginBottom: 50,

    width: 350,
    height: 350,
  },
  text: {
    marginBottom: 45,

    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default PreparingOrderScreen;
