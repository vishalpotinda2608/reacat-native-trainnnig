import {
  Button,
  Text,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import Home from "./src/Views/Home/Home";
import Login from "./src/Views/Login/Login";
import Register from "./src/Views/Register/Register";

const App = () => {
  return (
    <View>
      <Register />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  add: {
    backgroundColor: "gray",
    margin: 20,
  },
  input: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
  },
});
