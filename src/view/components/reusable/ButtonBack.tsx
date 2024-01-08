import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ButtonBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={navigation.goBack}>
      <AntDesign name="arrowleft" size={20} color="#00CCBB" />
    </TouchableOpacity>
  );
};

export default ButtonBack;
