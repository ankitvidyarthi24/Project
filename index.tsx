import { router } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { articles } from "../../constants/articles";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      
      {/* CATEGORY BUTTONS */}
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        {["Tech", "Sports", "Cinema"].map((category) => (
          <View
            key={category}
            style={{
              paddingVertical: 6,
              paddingHorizontal: 14,
              borderWidth: 1,
              borderRadius: 20,
              marginRight: 10,
            }}
          >
            <Text>{category}</Text>
          </View>
        ))}
      </View>

      {/* ARTICLE LIST */}
      <FlatList
        data={articles}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/detail",
                params: {
                  title: item.title,
                  author: item.author,
                  content: item.content,
                  urlToImage: item.urlToImage,
                },
              })
            }
            style={{ marginBottom: 20 }}
          >
            <Image
              source={{ uri: item.urlToImage }}
              style={{
                height: 180,
                borderRadius: 12,
                marginBottom: 8,
              }}
            />

            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.title}
            </Text>

            <Text style={{ color: "gray" }}>
              {item.author} • 1 day ago
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}
