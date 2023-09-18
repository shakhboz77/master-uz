import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView,
  TouchableWithoutFeedback, Platform, Keyboard, StyleSheet,Alert  } from 'react-native';
  import React, {useState} from 'react';
import { loginUser } from './firebase/Auth';
import { Entypo } from '@expo/vector-icons';
  
  export default function Login(props) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [toggleEye,setToggleEye] = useState(true)

    async function handleLogin(){
        if (!email || !password) {
            Alert.alert('fill out the form')
        } else {
            try {
                loginUser(email,password)
            } catch (error) {
                Alert.alert(error.message)
            }
        }
    }
  
      function NavigateResetPassword(){
          props.navigation.navigate('Password')
  
      }
    return (
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <TouchableWithoutFeedback 
          style={styles.container}
          onPress={Keyboard.dismiss}> 
              <View style={styles.form}>
                  <Text style={styles.title}>Email</Text>
                  <TextInput onChangeText={(t) => setEmail(t)}
                  style={styles.input} placeholder='Enter your email' />
                  <Text style={styles.title} >Password</Text>
                  <View style={{flexDirection:'row',borderWidth:0.3,justifyContent:'space-between',padding:15}}>
                <TextInput onChangeText={(t) => setPassword(t)}
                secureTextEntry={toggleEye ? false : true} 
                placeholder='Enter your password' />
                <Entypo onPress={() => setToggleEye(!toggleEye)}
                name={ toggleEye ? "eye" : "eye-with-line" }size={24} color="black" />
                </View>
                  <TouchableOpacity onPress={() => handleLogin()}
                  style={styles.button}>
                      <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text onPress={NavigateResetPassword} style={[styles.title,{textAlign:'center'}]}>Forget password?</Text>
        </View>     
        </TouchableWithoutFeedback> 
      </KeyboardAvoidingView>
  
      ) 
  }
  
  const styles = StyleSheet.create({
      container:{
          flex:1,
          justifyContent:'center',
          flexDirection:'column',
          gap:10,
      },
      form:{
          padding:30,
          flexDirection:'column',
          gap:10,
  
      },
      title:{
          fontSize:20,
          textAlign:'center'
  
      },
      input:{
          borderWidth:0.3,
          padding:15,
  
      },
      button:{
          backgroundColor:'blue',
          padding:20,
          gap:10,
  
      },
      buttonText:{
          color:'white',
          fontSize:20,
          fontWeight:'bolt',
          textAlign:'center',
  
      }
  })
  
  