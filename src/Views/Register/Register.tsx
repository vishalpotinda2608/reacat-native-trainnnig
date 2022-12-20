import {StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AuthService from '../../Services/AuthService'
import ValidationService from '../../Services/ValidationService/ValidationService'
import Error from '../../Components/UI/Error/Error'
import Input from '../../Components/UI/Input/Input'
import Button from '../../Components/UI/Button/Button'
const Register = (props) => {
  

  // console.log("received theme color",props);

  // props.user.username="Nikhil"
  // // props.theme="blue"
  // console.log(props);
  // props.arr.push("ABC")
  

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    password: ''
  })

  const [isMobile, setIsMobile] = useState(true);
  useEffect(()=>{
    console.log("Regiter loaded should execute only at first init");
  
  },[])

  const registerHandler = () => {
      AuthService.onRegister(user)
      .then((res)=>{
        props.navigation.navigate('login')
        console.log(res);
        
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}> Register here </Text>
      <View>

      <Input
       value={user.firstName}
       onChangeText={(ev) => {
        setUser({ ...user, firstName: ev })}}
        placeholder='First Name'
       />


        {/* <TextInput style={styles.textbox} value={user.firstName} onChangeText={(ev) => {
          setUser({ ...user, firstName: ev })
        }} placeholder='First Name' />

         */}
        <Input  value={user.lastName} onChangeText={(ev) => {
          setUser({ ...user, lastName: ev })
        }} placeholder='Last Name' />\

        <Input  value={user.email} onChangeText={(ev) => {
          setUser({ ...user, email: ev })
        }} placeholder='Email' />

        <Input  value={user.password} 
        secureTextEntry={true} onChangeText={(ev) => {
          setUser({ ...user, password: ev })
        }} placeholder='Enter password' />

        <Input
         style={{borderColor:!isMobile ? 'red':'blue',borderWidth:1}} 
         value={user.mobileNo} onChangeText={(text) => {
          const enteredMobile=ValidationService.isMobile(text);
          setIsMobile(enteredMobile);
          setUser({ ...user, mobileNo: text })
        }} placeholder='Mobile No' />

        {!isMobile && <Error title="Enter Valid Mobile number" />}

        <View style={{ marginTop: 6 }}>
          {/* <Button title="Register" onPress={registerHandler} /> */}
          <Button onPress={registerHandler} title="Register" />

        </View>

      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor: 'blue',
    flexDirection: 'column',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  h1: {
    fontSize: 24
  },
  
 
})
