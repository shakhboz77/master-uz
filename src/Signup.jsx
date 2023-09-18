import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView,
TouchableWithoutFeedback, Keyboard, StyleSheet, Alert } from 'react-native';
import React, {useState} from 'react';
import {createUser} from './firebase/Auth';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function Signup(props) {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [toggleEye,setToggleEye] = useState(true)
    

    function navigate(){
        props.navigation.navigate('Login')
    }

    async function handleSubmit(){
       if (!name || !email || !password) {
           Alert.alert('Fill out the form')
       }else{
        try {
            createUser(name,email,password)
        } catch (error) {
            Alert.alert(error.massage)
        }
       }
    }

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback 
        style={styles.container}
        onPress={Keyboard.dismiss}> 
            <View style={styles.form}>
                <Text style={styles.title}>Name</Text>
                <TextInput onChangeText={(t) => setName(t)}
                style={styles.input} placeholder='Enter your username' />
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
                <TouchableOpacity onPress={handleSubmit}
                style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text onPress={navigate} style={[styles.title,{textAlign:'center'}]}>Need to login?</Text>
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
        justifyContent:'center'

    },
    title:{
        fontSize:23,
        textAlign:'center',

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

