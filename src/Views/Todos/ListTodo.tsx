import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import AddTodo from './AddTodo'

const ListTodo = (props) => {
const [todos,setTodos] = useState(props.todos)
    const todoHandler=(todo)=>{
       setTodos(prev=>[...prev,todo])
        
    }
  return (
    <View>

     {todos.map((todo)=>{
        return(
            <Text>{todo}</Text>
        )
     }) }
     <AddTodo onAddTodo={(todo)=>todoHandler(todo)} />
    </View>
  )
}

export default ListTodo

const styles = StyleSheet.create({})