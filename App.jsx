import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackScreen from './src/StackScreen';
import AuthContext from './src/context/AuthContext';



export default function App() {
  return (
 <AuthContext>
      <StackScreen />
 </AuthContext>
  );
}


