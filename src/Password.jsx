import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView,
    TouchableWithoutFeedback, Keyboard, StyleSheet,Alert } from 'react-native';
    import React, {useState} from 'react';
import { resentPassword } from './firebase/Auth';
  
    
    export default function handlePassword(props) {
        const [email,setEmail] = useState('')

        async function resetYourPassword(){
            if (!email) {
                Alert.alert('Enter your email')
            } else {
                try {
                    resentPassword(email)
                } catch (error) {
                   Alert.alert(error.message)
                }
            }
        }
    
        function NavigateToLogin(){
            props.navigation.navigate('Login')
    
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
                    <TextInput style={styles.input} placeholder='Enter your email' />
                    <TouchableOpacity onChangeText={resetYourPassword}
                    style={styles.button}>
                        <Text style={styles.buttonText}>Reset password</Text>
            </TouchableOpacity>
            <Text onPress={NavigateToLogin} style={[styles.title,{textAlign:'center'}]}>Need to login?</Text>
        </View>     
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    
        ) 
    }
    
    const styles = StyleSheet.create({
        container:{
            flex:1,
            flexDirection:'column',
            gap:10,
        },
        form:{
            padding:30,
            flexDirection:'column',
            gap:10,
            justifyContent:'center',
    
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
    
        },
        buttonText:{
            color:'white',
            fontSize:20,
            fontWeight:'bolt',
            textAlign:'center',
    
        }
    })
    
    