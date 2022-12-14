import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddTodo from './AddTodo'

const ListTodo = (props) => {

    const todoHandler=(todo)=>{
        props.todos.push(todo);
        
    }
  return (
    <View>

     {props.todos.map((todo)=>{
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