import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'

const AddTodo = (props) => {
    const [todo,setTodos]=useState('')

    const addTodos=()=>{
        props.onAddTodo(todo)
    }
  return (
    <View>
      <TextInput placeholder='Add todo' onChangeText={(t)=>setTodos(t)} />
      <Button title="Add Todo" onPress={addTodos} />
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({})