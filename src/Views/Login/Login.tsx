
import { Text, TextInput, View ,StyleSheet, Pressable} from 'react-native'
import React, { Component, useState } from 'react'
import LoadingButton from '../../Components/LoadingButton/LoadingButton'
import { User } from '../../models/User.model';
import ValidationService from '../../Services/ValidationService/ValidationService';
import Error from '../../Components/UI/Error/Error';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button'
const Login = (props) => {


  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [counter,setCounter]=useState(0);

  const [isEmail,setISEmail]=useState(true);

const loginHandler=()=>{
console.log('login handler invoked');

setCounter(counter+1);
console.log(counter);

props.navigation.navigate('tabs')

}

const onRegister=()=>{
  props.navigation.navigate('register')
}

  return (
    <View style={styles.container}>
         <Text style={styles.h1}> Login</Text>
         <View>
             <Input 
             style={{borderColor:!isEmail ? 'red':'blue',borderWidth:1}} 
             value={email}  
             onChangeText={(ev)=>{
              const enteredEmail=ValidationService.isEmail(ev);
              setISEmail(enteredEmail)
              setEmail(ev);
              console.log(email)
             }} placeholder='enter email'/>
          {!isEmail &&  <Error title="Enter Valid Email" />}
             <Input   value={password} secureTextEntry={true} placeholder='enter password' onChangeText={(ev)=>setPassword(ev)} />
              <View style={{marginTop:6}}>
              {/* <Button  title="Login"  onPress={loginHandler} /> */}
              <Button  onPress={loginHandler} title=""/>
              <Pressable style={{marginTop:10}} onPress={onRegister}>
                <Text style={{color:'blue',textDecorationLine:'underline'}}>Register Here</Text>
              </Pressable>
              
              </View>
          
         </View>
       </View>
  )
}

export default Login


const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'#eee',
        display:'flex',
        flexDirection:'column',
        color:'white',
        padding:10,
        textAlign:'center',
        justifyContent:'center'
    },
    h1:{
        fontSize:24
    },  
  
})
