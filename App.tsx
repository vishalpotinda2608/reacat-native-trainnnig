import { Button, Text, StyleSheet, TextInput, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Home from './src/Views/Home/Home'
import Login from './src/Views/Login/Login'
import Register from './src/Views/Register/Register'
import  {useEffect} from 'react'

function App(){
console.log('app loaded')
  const [counter,setCounter]=useState(0)
  const [alert,setAlert]=useState();


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
       <Register />
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
