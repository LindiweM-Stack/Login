import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Firebase } from 'firebase';
import Form from './components/Form';
import Display from './components/Display';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri:"https://th.bing.com/th/id/OIP.MEr7vGUdG1MgoPvixNoBygHaFf?w=223&h=180&c=7&r=0&o=5&pid=1.7"}} style={styles.image}>

      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={Login} />

          <Stack.Screen name="signup" component={SignUp} />

          <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="Display" component={Display} />
        </Stack.Navigator>
      </NavigationContainer>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'pink',
  },
  
    image:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  
})
