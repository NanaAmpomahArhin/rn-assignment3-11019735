import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { categoriesData } from "./Data/categoriesData";
export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#F7F0E8", flex: 1 }}>
      <View style={{ padding: 15, gap: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Hello, Devs
            </Text>
            <Text style={{ fontWeight: "normal" }}>14 tasks today</Text>
          </View>

          <TouchableOpacity
            style={{ backgroundColor: "white", borderRadius: 999, padding: 8 }}
          >
            <Image source={require("./assets/person.png")} />
          </TouchableOpacity>
        </View>

        {/**The Search Bar */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {/**The TextInput */}
          <TextInput
            placeholder="Search"
            style={{
              backgroundColor: "white",
              width: "80%",
              height: 50,
              borderRadius: 10,
              padding: 5,
            }}
          />
          {/**The Filter Icon */}
          <View
            style={{ backgroundColor: "#F0522F", padding: 8, borderRadius: 10 }}
          >
            <Image source={require("./assets/Vector.png")} />
          </View>
        </View>

        {/**Categories */}
        <View style={{ gap: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, letterSpacing: 1 }}>
            Categories
          </Text>

          <FlatList
            data={categoriesData}
            renderItem={({ item }) => (
              <View
                style={{
                  gap: 10,
                  backgroundColor: "white",
                  marginRight: 5,
                  padding: 15,
                  borderRadius: 10,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      letterSpacing: 1,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text>{item.description}</Text>
                </View>
                <Image source={item.image} />
              </View>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
