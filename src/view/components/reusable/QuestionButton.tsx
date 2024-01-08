import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

type Props = {
  questionText: string;
};
const QuestionButton: React.FC<Props> = ({ questionText }) => {
  return (
    <TouchableOpacity style={s.containerButton}>
      <View style={s.textWrapper}>
        <SimpleLineIcons
          style={s.icon}
          name="question"
          size={22}
          color="#6e6e73"
        />
        <Text>{questionText}</Text>
      </View>
      <AntDesign name="arrowright" size={24} color="#00CCBB" />
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  containerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingVertical: 10,
    paddingHorizontal: 15,

    backgroundColor: "#fff",
  },
  icon: {
    marginRight: 5,
  },
  textWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default QuestionButton;
