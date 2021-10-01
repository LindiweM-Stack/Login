import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
  
  
} from 'react-native';
import { firebase } from '../Firebase/Config';





const Display = () => {
  
const user = firebase.auth().currentUser
const id = user.uid
   const [array, setArray] = useState([])
  useEffect(() => {
    firebase
      .firestore()
      .collection('Bookmark').doc(id).collection('music')
      .onSnapshot(snapshot => {
        const lists = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setArray(lists)
      })
  }, [])

  
  const handleOnDelete = user => {
    firebase
      .firestore()
      .collection('Bookmark').doc(id).collection('music')
      .doc(user)
      .delete()
  }


    
  const handleUpdate = user => {
    firebase
      .firestore()
      .collection('Bookmark').doc(id).collection('music')
      .doc(user)
      .delete()
  }

const displ = array.map(list => {
   return (
        
        <View style = {styles.container}>
         <View style={styles.lists}>
          <Text>{list.song}</Text>
           <Text>{list.artist}</Text>
            <Text>{list.album}</Text>
             <Text>{list.year}</Text>
              <Text>{list.link}</Text>
         <br />
          <View>
          <Text style={{fontSize: 16, marginLeft: 80,}}>
           Your list of favourites!
          </Text>

          <br />
          <br />
  
    <TouchableOpacity style={{ borderRadius: 24, width: 150, height: 40, backgroundColor: 'cadetblue', paddingLeft: 50, paddingTop: 10, fontSize: 30, fontWeight: 'bold', marginLeft: 80, borderColor: 'white', borderWidth: 5,}} onPress={() =>handleOnDelete(list.id)}> 
      <Text> Delete</Text>
      </TouchableOpacity>

   </View>
   <br />
   <TouchableOpacity style={{ borderRadius: 24, width: 150, height: 40, backgroundColor: 'cadetblue', paddingLeft: 50, paddingTop: 5, fontSize: 30, fontWeight: 'bold', marginLeft: 80, borderColor: 'white', borderWidth: 5,}} onPress={() =>handleUpdate(list.id)}>
      <Text>Update</Text>
      </TouchableOpacity>
      </View>
      </View>
        )
      })
 
 return (

    <View>
    {displ}    
    </View>
  )
}


const styles=StyleSheet.create({
      container: {
        backgroundColor: '#F5CBA7',
        fontSize: 20,
      },


})


export default Display;




