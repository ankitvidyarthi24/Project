import { Text, TextInput, View } from "react-native";

export default function SearchScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 15 }}>
        Search
      </Text>

      <TextInput
        placeholder="Search news..."
        style={{
          borderWidth: 1,
          borderRadius: 20,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
      />
    </View>
  );
}
