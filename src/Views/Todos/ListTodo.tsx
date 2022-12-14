// import { StyleSheet, Text, View } from 'react-native'
// import React,{useState} from 'react'
// import AddTodo from './AddTodo'

// const ListTodo = (props) => {
// const [todos,setTodos] = useState(props.todos)

//     const todoHandler=(todo)=>{
//        setTodos(prev=>[...prev,todo])
//        props.onAddNewTodo(todo);
       
        
//     }

    
//   return (
//     <View>

//      {todos.map((todo,idx)=>{
//         return(
//             <Text key={idx}>{todo}</Text>
//         )
//      }) }
//      <AddTodo onAddTodo={(todo)=>todoHandler(todo)} />
//     </View>
//   )
// }

// export default ListTodo

// const styles = StyleSheet.create({})

import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListTodo = (props) => {
    const onNavigate=()=>{
        props.navigation.navigate('register',{name:"ABC"})
        
    }
  return (
    <View>
      <Text>ListTodo</Text>
      <Button title="regiser" onPress={onNavigate} />
    </View>
  )
}

export default ListTodo

const styles = StyleSheet.create({})