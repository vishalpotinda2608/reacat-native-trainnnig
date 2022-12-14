import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Register = (props) => {
  console.log("received theme color",props);

  props.user.username="Nikhil"
  // props.theme="blue"
  console.log(props);
  props.arr.push("ABC")
  

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    password: ''
  })

  useEffect(()=>{
    console.log("Regiter loaded should execute only at first init");
  
  },[])

  const registerHandler = () => {
    console.log(user);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}> Register here</Text>
      <View>
        <TextInput style={styles.textbox} value={user.firstName} onChangeText={(ev) => {
          setUser({ ...user, firstName: ev })
        }} placeholder='First Name' />
        <TextInput style={styles.textbox} value={user.lastName} onChangeText={(ev) => {
          setUser({ ...user, lastName: ev })
        }} placeholder='Last Name' />
        <TextInput style={styles.textbox} value={user.email} onChangeText={(ev) => {
          setUser({ ...user, email: ev })
        }} placeholder='Email' />
        <TextInput style={styles.textbox} value={user.password} 
        secureTextEntry={true} onChangeText={(ev) => {
          setUser({ ...user, password: ev })
        }} placeholder='Enter password' />
        <TextInput style={styles.textbox} value={user.mobileNo} onChangeText={(ev) => {
          setUser({ ...user, mobileNo: ev })
        }} placeholder='Mobile No' />
        <View style={{ marginTop: 6 }}>
          <Button title="Login" onPress={registerHandler} />

        </View>

      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  h1: {
    fontSize: 24
  },
  button: {

  },
  textbox: {
    padding: 10,
    lineHeight: 40,
    fontSize: 18,
    backgroundColor: 'white',
    margin: 3
  }
})
