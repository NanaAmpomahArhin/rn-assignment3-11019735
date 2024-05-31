import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F0E8",
    flex: 1,
  },
  wrapper: {
    padding: 15,
    gap: 20,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subheadingText: {
    fontWeight: "normal",
  },
  buttonContainer: {
    backgroundColor: "white",
    borderRadius: 999,
    padding: 8,
  },
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    borderRadius: 10,
    padding: 5,
  },
  filterIconContainer: {
    backgroundColor: "#F0522F",
    padding: 8,
    borderRadius: 10,
  },
  categoriesContainer: {
    gap: 10,
  },
  categoriesHeading: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
  },
  categoryCard: {
    gap: 10,
    backgroundColor: "white",
    marginRight: 5,
    padding: 15,
    borderRadius: 10,
  },
  categoryCardHeading: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
  },
  ongoingTasksContainer: {
    gap: 20,
  },
  ongoingTasksHeading: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
  },
  ongoingTaskCard: {
    gap: 10,
    height: 150,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E8D1BA",
    marginRight: 5,
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 5,
    justifyContent: "center",
  },
  ongoingTaskName: {
    fontWeight: "medium",
    fontSize: 20,
    letterSpacing: 1,
  },
});

export default styles;
