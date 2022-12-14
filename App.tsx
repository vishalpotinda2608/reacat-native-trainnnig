import { Button, Text, StyleSheet, TextInput, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Home from './src/Views/Home/Home'
import Login from './src/Views/Login/Login'
import Register from './src/Views/Register/Register'
import  {useEffect} from 'react'
import ListTodo from './src/Views/Todos/ListTodo'


function App(){
console.log('app loaded')
const [todos,setTodos]=useState(["Home work","Car Clean","Buy grossary","TimeSheet"])
  const [counter,setCounter]=useState(0)
  const [alert,setAlert]=useState();
  const [user,setUser]=useState({
    username:"vishal",
    password:'123456'
  })


  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
    
  // },[])

  const onIncrement=()=>{
    setCounter(counter+1)
  }

  const onAlet=()=>{
    console.log("STate change")
  }


  return (
    <SafeAreaView>
      <ListTodo todos={todos} />
       {/* <Register theme="green " fontFamily="fansarif" user={user} arr={["NIlhi","fdjl","fdhf"]} /> */}
    </SafeAreaView>
  )
}

// const App = () => {
//   return (
//     <View>
//       <Login />
//     </View>
//   )
// }

export default App

const styles = StyleSheet.create({
  add: {
    backgroundColor: 'gray',
    margin: 20
  },
  input: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10
  },
  
})
