import {
  Button,
  Text,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import React, { createContext, useState } from "react";
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
import A from "./src/Views/Todos/A";


const Stack = createStackNavigator();

 const UserContext=createContext('Nikhil');

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

  const [isOnline, setIsonline] = useState(true);


const onToggleHanlder=()=>{

  const obj={name:"Roshan",age:25}


  console.log("Des");
  const {name,age}=obj;
  console.log(name);
  console.log(age);
  


console.log("Basic way");

  console.log(obj['name']);
  console.log(obj.age);
  



  // let obj1={
  //     firstname:"ABC",
  //     lastname:"fdsfkhks",
  //     age:30,

  //   }

  // const newObj={firstname:"Nikhil",lastname:obj1.lastname,age:obj1.age};
  // console.log("normal",newObj);
  // const spredObj={...obj1,firstname:"Roshan"}
  // console.log("spred",spredObj);
  


  

  


  
  

}
  return (
    // <View>
    //   <Text>{isOnline ? `${user.username} is Online`:`${user.username} is Offilne`}</Text>
    //   <Button title={!isOnline ? 'Online':'Offilne'} onPress={onToggleHanlder} />
    // </View>
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
export {UserContext}
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
