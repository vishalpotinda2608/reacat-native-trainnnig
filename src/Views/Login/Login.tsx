
import { Text, TextInput, View ,StyleSheet,Button} from 'react-native'
import React, { Component, useState } from 'react'
import LoadingButton from '../../Components/LoadingButton/LoadingButton'
import { User } from '../../models/User.model';

const Login = () => {
  // const [email,setEmail]=useState('');
  // const [password,setPassword]=useState('');
  // const [users,setUsers]=useState<User[]>([]);


  // const onChangeEmailHandler=(email)=>{

  //   setEmail(email)
    
  // }


  // const onPasswordChange=(password)=>{
  // setPassword(password)
    
  // }

  // const LoginHandler=()=>{
  //   console.log({email,password});
  //  setUsers((prev)=>[...prev,{email,password}]);
  //  console.log(users);
   
    
  // }


  return (
    <View style={styles.container}>
         <Text style={styles.h1}> Login</Text>
         <View>
             <TextInput style={styles.textbox} placeholder='enter email'/>
             <TextInput  style={styles.textbox} secureTextEntry={true} placeholder='enter password'/>
              <View style={{marginTop:6}}>
              <Button  title="Login" />
              </View>
                         {/* <LoadingButton/> */}
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
