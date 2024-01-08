import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export const NotFoundScreen = ({errorMessage}: {errorMessage?: string}) => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();
  
  const onPressHome = () => {
    if (canGoBack) {
      navigation.goBack();
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={s.container}>
      <Text>Sorry, we can't find the content you were looking for.</Text>
      <Text style={s.errorMessage}>{errorMessage}</Text>
      <TouchableOpacity onPress={onPressHome}>
        <Text>{canGoBack ? "Go back" : "Go home"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  errorMessage: {
    marginBottom: 20,
  },
});
