import { useState, useLayoutEffect,useContext} from "react";
import { View, Button, Text,  } from "react-native";
import { Auth } from "../context/AuthContext";




export default function MyHome(props){
    const [data,setData] = useState(null);

    const { isLoggedIn,auth} = useContext(Auth)

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: isLoggedIn ? () => <Text>{auth?.currentUser?.email}</Text> : () => <Text onPress={() => props.navigation.navigate('Signup')} style={{paddingRight:20}} >Sign up</Text> 
        })
    },[props.navigation,isLoggedIn])

    
  
    let apiURl = 'http://localhost:5005'
  
    async function fetchDataFromServer(){
      try {
        let dataRaw = await fetch(`${apiURl}/data`);
      let data = await dataRaw.json();
      setData(data)
      } catch (error) {
        Alert.alert(error.message)
      }
    }
  
    async function sendData(){
      await fetch(`${apiURl}/clientData`,{
        headers:{
          'Content-Type':'Application/json'
        },
        method:'POST',
        body:JSON.stringify({message:'Hi from front-end'})
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    }
    return(
        <View>
          <Text>{data?.text}</Text>
          <Button title='Fetch Data' onPress={fetchDataFromServer} />
          <Button title='Send Data' onPress={sendData} />
        </View>
      )
    } 