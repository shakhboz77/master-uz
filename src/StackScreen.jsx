import { View, Text, Button } from 'react-native';
import { useState} from 'react';
import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {  MaterialIcons,FontAwesome5,Feather } from '@expo/vector-icons';
import Signup from './Signup';
import MyHome from './screens/Home';
import Login from './Login';
import Password from './Password';




const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



  

function List(){
  return(
    <View>
      <Text>List</Text>
    </View>
  )
}

function Post(){
  return(
    <View>
      <Text>Post</Text>
    </View>
  )
}

function Chat(){
  return(
    <View>
    <Text>Chat</Text>
  </View>
  )
}

function MyProfile(){
  return(
    <View>
      <Text>MyProfile</Text>
    </View>
  )
}

function MyDrawer(){
  function navigate(){

  }
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='MyCreen' component={MyHome} options={{
        headerTitle:'Home',
      }} />
    </Drawer.Navigator>
  )
}

function MyTab(){
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={MyDrawer} options={() => ({
        headerShown:false,
        tabBarIcon:({size,color}) => <MaterialIcons name="home" size={size} color={color} />
      })}/>
      <Tab.Screen name='List' component={List} options={() => ({
        tabBarIcon:({size,color}) => <FontAwesome5 name="list" size={size} color={color} />
      })}/>
      <Tab.Screen name='Post' component={Post} options={() => ({
        tabBarIcon:({size,color}) => <FontAwesome5 name="folder-plus" size={size} color={color} />
      })}/>
      <Tab.Screen name='Chat' component={Chat} options={() => ({
        tabBarIcon:({size,color}) => <MaterialIcons name="chat" size={size} color={color} />
      })}/>
      <Tab.Screen name='MyProfile' component={MyProfile} options={() => ({ 
        tabBarIcon:({size,color}) => <MaterialIcons name="account-box" size={size} color={color}/>
      })}/>
      
    </Tab.Navigator>
  )
}

export default function StackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name='Main' component={MyTab} options={{headerShown:false}}/>
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Password' component={Password} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}