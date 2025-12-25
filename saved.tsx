import { Text, View } from "react-native";

export default function SavedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 16, color: "gray" }}>
        No saved articles yet
      </Text>
    </View>
  );
}
