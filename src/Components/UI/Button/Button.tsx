import { Pressable, StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
    <TouchableOpacity
    style={styles.button}
    onPress={props.onPress}
    disabled={props.disabled}
  >
    <Text style={styles.text}>{props.title}</Text>
  </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        backgroundColor:'darkblue',
        paddingVertical:10,
        borderRadius:10,
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    }
})