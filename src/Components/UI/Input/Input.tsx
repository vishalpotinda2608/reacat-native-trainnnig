import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const Input = (props) => {
  return (
    <TextInput
     style={[styles.textbox,props.style]} 
     value={props.value} 
     onChangeText={props.onChangeText}
      placeholder={props.placeholder} />

  )
}

export default Input

const styles = StyleSheet.create({
    textbox: {
        padding: 10,
        lineHeight: 40,
        fontSize: 18,
        backgroundColor: 'gray',
        margin: 3
      }
})