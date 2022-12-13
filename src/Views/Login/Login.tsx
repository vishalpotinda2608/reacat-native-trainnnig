
import { Text, TextInput, View ,StyleSheet,Button} from 'react-native'
import React, { Component, useState } from 'react'
import LoadingButton from '../../Components/LoadingButton/LoadingButton'
import { User } from '../../models/User.model';

const Login = () => {
  
  const [email,setEmail]=useState('chandan');
  const [password,setPassword]=useState('');
  const [counter,setCounter]=useState(0);

const loginHandler=()=>{
console.log('login handler invoked');
setCounter(counter+1);
console.log(counter)

}

  return (
    <View style={styles.container}>
         <Text style={styles.h1}> Login</Text>
         <View>
             <TextInput style={styles.textbox} value={email}  onChangeText={(ev)=>{
              setEmail(ev);
              console.log(email)
             }} placeholder='enter email'/>
             <TextInput  style={styles.textbox} value={password} secureTextEntry={true} placeholder='enter password' onChangeText={(ev)=>setPassword(ev)} />
              <View style={{marginTop:6}}>
              <Button  title="Login"  onPress={loginHandler} />

              </View>
          
         </View>
       </View>
  )
}

export default Login


const styles = StyleSheet.create({
    container:{
        height:'100vh',
        width:'100vw',
        backgroundColor:'blue',
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
    button:{

    },
    textbox:{
      padding:20,
      height:10,
      fontSize:12,
      backgroundColor:'white'

    }
})
