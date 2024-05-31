import React from "react";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { categoriesData } from "./Data/categoriesData";
import { ongoingTaskData } from "./Data/ongoingTasksData";
import styles from "./styles";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.headingContainer}>
          <View>
            <Text style={styles.headingText}>Hello, Devs</Text>
            <Text style={styles.subheadingText}>14 tasks today</Text>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Image source={require("./assets/person.png")} />
          </TouchableOpacity>
        </View>

        {/* The Search Bar */}
        <View style={styles.searchBarContainer}>
          {/* The TextInput */}
          <TextInput placeholder="Search" style={styles.textInput} />
          {/* The Filter Icon */}
          <View style={styles.filterIconContainer}>
            <Image source={require("./assets/Vector.png")} />
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesHeading}>Categories</Text>
          <FlatList
            data={categoriesData}
            renderItem={({ item }) => (
              <View style={styles.categoryCard}>
                <View>
                  <Text style={styles.categoryCardHeading}>{item.name}</Text>
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

        {/* Ongoing Tasks */}
        <View style={styles.ongoingTasksContainer}>
          <Text style={styles.ongoingTasksHeading}>Ongoing Task</Text>
          <FlatList
            data={ongoingTaskData}
            renderItem={({ item }) => (
              <View style={styles.ongoingTaskCard}>
                <View>
                  <Text style={styles.ongoingTaskName}>{item.name}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* Button */}
        <View>
          <Button title="Click Me" onPress={() => alert("Button Clicked")} />
        </View>
      </View>
    </ScrollView>
  );
}
