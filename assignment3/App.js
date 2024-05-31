import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
      </View>
    </SafeAreaView>
  );
}
