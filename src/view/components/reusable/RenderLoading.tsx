import { View, Text, ActivityIndicator } from "react-native";

const RenderLoading = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center", 
        paddingVertical: 30,
        paddingHorizontal: 15,
      }}
    >
      <Text style={{ marginBottom: 30, textAlign: "center" }}>
        Free services scale down when inactive, that's why you are still waiting a data from
        the Render. The data is comming, please be patient:)
      </Text>
      <ActivityIndicator size="large" color="#00CCBB" />
    </View>
  );
};

export default RenderLoading;
