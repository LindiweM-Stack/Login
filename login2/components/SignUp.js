import  React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, Button, KeyboardAvoidingView, TouchableOpacity, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import {firebase} from '../Firebase/Config';
import Login from './Login';
import Form from './Form';






var db = firebase.firestore();
const SignUp = ({navigation}) => {
  const [fullNames, setFullNames] = useState ();
   const[email, setEmail] = useState ();
    const [password, setPassword] = useState () ;
     const[confirmPassword, setConfirmPassword] = useState ();

      
    const navsign = () => {
     navigation.navigate('Login')
    };


     const Login = () => {
       firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
         alert('succesfully signed Up')
       }).catch(error=>{
         alert(error)
       })
     }
 
  


  return (


  

   <View style={styles.container}>
    <ImageBackground source={{uri:"https://th.bing.com/th/id/OIP.MEr7vGUdG1MgoPvixNoBygHaFf?w=223&h=180&c=7&r=0&o=5&pid=1.7"}} style={styles.image}>
   <View>
   <Text style={{fontWeight: 'bold', fontSize: 18, paddingVertical: 30, paddingHorizontal: 50, justifyContent: 'center',}}>New to music bookmark?  Sign up here to create an account!</Text>
   <TextInput style={styles.input}
    placeholder={'Full Names'} 
    onChangeText={(text) => setFullNames(text)}
    onPress={'Full Names'}
    />

    <TextInput style={styles.input}
    placeholder={'Email'}
    onChangeText={(text) => setEmail(text)}
     onPress={'Email'}
    />

    
    <TextInput style={styles.input}
    
    placeholder={'Password'} 
    onChangeText={(text) => setPassword(text)}
     onPress={'Password'}
    secureTextEntry />

    
    <TextInput style={styles.input}
    placeholder={'Confirm Password'} 
    onChangeText={(text) => setConfirmPassword(text)}
     onPress={'Confirm Password'}
    secureTextEntry />

           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 30}}>
           <TouchableOpacity   onPress={Login}   style={{ borderRadius: 24, width: 150, height: 40, backgroundColor: 'white', paddingLeft: 50, paddingTop: 6,   marginTop: 10, borderWidth: 3, borderColor: '#515E63',}}>
            <Text>Sign Up</Text>
            
      </TouchableOpacity>
    </View>
</View>
 </ImageBackground>
 </View>

  
  ); 
}  




const styles = StyleSheet.create({

   image:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  
  container: {
    backgroundColor: '',
  },

  
  
   input: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: 'white',
    padding: 8,
    marginTop: 50,
    paddingLeft: 10,
    width: 300,
    height: 4,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'courierNew',
    borderRadius: 8,
    borderWidth: 3,

    fontColor: 'black',
    borderColor: '#515E63',

  },

  

  
 
});

export default SignUp;


