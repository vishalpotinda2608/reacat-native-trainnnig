import {  Button, Text,StyleSheet, TextInput, View} from 'react-native'
import React from 'react'
import Add from './componenets/Add'
import {demo,demo2} from './componenets/Utility'
const App = () => {
  return (
    <View>
      <View style={styles.add}>
          <Text style={{textAlign:'center',fontWeight:'bold'}}>Student</Text>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <Button title='Add'  />
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  add:{
    backgroundColor:'gray',
    margin:20
  },
input:{
  backgroundColor:'white',
  marginHorizontal:10,
  marginVertical:5,
  padding:10
}
})
