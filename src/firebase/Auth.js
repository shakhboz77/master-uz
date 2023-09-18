import './Config';
import { Alert, } from 'react-native';
import { getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     sendPasswordResetEmail,
} from 'firebase/auth';


export async function createUser(name,email,password){
    try {
        createUserWithEmailAndPassword(getAuth(),email,password)
        .then(() => {
            Alert.alert('Success')
        })
        .catch((err) => Alert.alert(err.message))
    } catch (error) {
       Alert.alert(error.message) 
    }
}

export async function loginUser(email,password){
    try {
        signInWithEmailAndPassword(getAuth(),email,password)
        .then(() => {
           Alert.alert('Success') 
        })
        .catch(() => {
            Alert.alert(error.message)
        })
    } catch (error) {
        Alert.alert(error.message)
    }
}

export async function resentPassword(email){
    try {
        sendPasswordResetEmail(getAuth(),email)
        .then(() => {
            Alert.alert('Success send to your email')
        })
        .then(() => {
            Alert.alert(erroe.message)
        })
    } catch (error) {
        Alert.alert(error.message)
    }
}