import {
  Button,
  Text,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import Home from "./src/Views/Home/Home";
import Login from "./src/Views/Login/Login";
import Register from "./src/Views/Register/Register";
import { useEffect } from "react";
import ListTodo from "./src/Views/Todos/ListTodo";
import Routes from "./src/Navigation/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
const Tab = createBottomTabNavigator();

import AuthService from "./src/Services/AuthService";
import { createStackNavigator } from "@react-navigation/stack";
import AddTodo from "./src/Views/Todos/AddTodo";
import Settings from "./src/Views/Settings/Settings";

const Stack = createStackNavigator();

function App() {

AuthService.getAllUser()
.then((res)=>{
  console.log(res);
  
})





  console.log("app loaded");
  const [todos, setTodos] = useState([
    "Home work",
    "Car Clean",
    "Buy grossary",
    "TimeSheet",
  ]);
  const [counter, setCounter] = useState(0);
  const [alert, setAlert] = useState();
  const [user, setUser] = useState({
    username: "vishal",
    password: "123456",
  });

  const [isLogged, setIsLogged] = useState(true);

  
  return (
    <Routes />
  );
}

// const App = () => {
//   return (
//     <View>
//       <Login />
//     </View>
//   )
// }

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
