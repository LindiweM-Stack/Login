import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { firebase } from '../Firebase/Config';
import Form from './Form';
import SignUp from './SignUp';

export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navsign = () => {
    navigation.navigate('signup');
  };
  

  const SignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('Successfully Logged In');
        {
          navigation.navigate('Form');
        }
      })
      .catch(function (error) {
        // Handle errors here.

        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };


  return (

    <View style={styles.container}> 
      <Text
        style={styles.text1}>
        Welcome to music bookmark, please enter your login details
      </Text>

      <TextInput
        style={styles.input}
        placeholder={'Email'}
        onChangeText={(email) => setEmail(email)}/>
      <TextInput
        style={styles.input}
        placeholder={'Password'}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry />

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 30,
        }}>
        <TouchableOpacity style={styles.button} onPress={SignIn}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              fontFamily: 'courierNew',
              color: 'grey',
              paddingTop: 5,
      
            }}>
            Login
          </Text>
        </TouchableOpacity>
       
        <View style={styles.text}>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'sanSerif',
                fontWeight: 'bold',
                color: '#CD5C5C',
                paddingTop: 20,
              }}>
              Don't have an account with us? Sign Up
            </Text>
          </TouchableOpacity>
           </View>
        </View> 
  
    </View>
     );
}




const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "",
  },

  text: {
    fontSize: 10,
    paddingTop: 30,
    fontWeight: 'bold',
    paddingLeft: 30,
    color: '#CD5C5C',
  },

  input: {
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#F5CBA7',
    padding: 8,
    marginTop: 50,
    paddingLeft: 30,
    width: 300,
    height: 50,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'courierNew',
    borderRadius: 8,
    borderWidth: 3,
    fontColor: 'black',
    borderColor: '#515E63',
  },

  button: {
    borderRadius: 24,
    width: 150,
    height: 40,
    backgroundColor: 'white',
    paddingLeft: 50,
    paddingTop: 6,
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#515E63',
    backgroundColor: '#F5CBA7',
  },

  text1:{
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 30,
    paddingHorizontal: 50,
    paddingLeft: 40,
    marginLeft: 20,
    color: '#CD5C5C',
  }
});
