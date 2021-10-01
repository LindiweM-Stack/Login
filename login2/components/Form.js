import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Button, FontSize, ImageBackground} from 'react-native'
import {firebase} from '../Firebase/Config';
import Navigation from "@react-navigation/native";
import Login from './Login';
import SignUp from './SignUp';


function Bookmark({navigation}) {

  const [song, setSong] = useState('');

  const [artist, setArtist] = useState('');

  const [album, setAlbum] = useState('');

  const [year, setYear] = useState('');

  const [link, setLink] = useState('');

//  const handleChange = e => {
 //   setSong(e.target.value);
  //};

 // const handleChangeArtist = e => {
    //setArtist(e.target.value);
 // };
 // const handleChangeAlbum = e => {
    //setAlbum(e.target.value);
  //};
  //const handleChangeYear = e => {
    //setYear(e.target.value);
  //};
  //const handleChangeLink = e => {
    //setLink(e.target.value);
  //};
//const handleSubmit = e => {
    //e.preventDefault();
    //props.handleSubmit(song, artist, album, year, link);
  //};

  //const handleDelete = e => {
    //e.preventDefault();
    //props.handleDelete(song, artist, album, year, link);
  //};

const NextPage=()=>{
    {navigation.navigate("Display")}
}


  const [uid, setUid] = useState();

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user)
      setUid(user.uid)
      }
    });
   // code below is to store the data that was inserted into the bookmark
  })
   var db = firebase.firestore();
const setData =()=>{
  db.collection('Bookmark').doc(uid).collection('music').add({song:song, artist:artist, album:album, year:year, link:link}).then(() => {
    alert('Bookmark added successfully')
  })
 .catch((error) =>{
   alert.error("Error adding bookmark: ", error);
 });
}

//code below is to retrieve the data that was inserted into the bookmark

const displayData = () => {
  alert("displaying data")
  firebase.firestore().collection("Bookmark").doc('').collection('music').get().then((data)=>{
    data.docs.forEach((item) =>{
      console.log(item.data())
    })
  }).catch((error)=> {
    console.log(error)
  })
}

  return (




   <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Welcome! <br /><br />
    Book-Mark Your Favourite Song Here</Text>
    <ImageBackground source={{uri:"https://th.bing.com/th/id/R.70219abfbc2dbb523a1b43d5f18464d2?rik=g9Ftn7vFi%2fvH4g&pid=ImgRaw&r=0"}} style={styles.image}>

   
   <TextInput style={styles.input}
    placeholder={'Song'} 
    value={song}
    onChangeText={(text) => setSong(text)}
    />
    <TextInput style={styles.input}
    placeholder={'Artist'}
    value={artist}
    onChangeText={(text) => setArtist(text)}
    />
    <TextInput style={styles.input}
    placeholder={'Album'} 
    value={album}
    onChangeText={(text) => setAlbum(text)}
    />
    <TextInput style={styles.input}
    placeholder={'Year'} 
    value={year}
    onChangeText={(text) => setYear(text)}
   />  
    <TextInput style={styles.input}
    
    placeholder={'Link'} 
    value={link}
    onChangeText={(text) => setLink(text)}
   />
 
  
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 30}}>
      <TouchableOpacity onPress={setData}  style={{ borderRadius: 24, width: 150, height: 40, backgroundColor: 'white', paddingLeft: 50, paddingTop: 6,   marginTop: 10, borderWidth: 3, borderColor: '#515E63',}}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>

   
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 30}}>
      <TouchableOpacity  onPress={()=>NextPage()}  style={{ borderRadius: 24, width: 150, height: 40, backgroundColor: 'white', paddingLeft: 50, paddingTop: 6,   marginTop: 10, borderWidth: 3, borderColor: '#515E63',}}>
        <Text>View display</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
 </SafeAreaView>




 
  ); 
} 







const styles = StyleSheet.create({

     image:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  
  
  container: {
    backgroundColor: '#F5CBA7',
    
    flex: 1,
    justifyContent: 'center',
  },


   input: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: 'white',
    padding: 8,
    marginTop: 50,
    paddingLeft: 30,
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

  text:{
    paddingTop: 30,
    paddingLeft: 8,
    borderRadius: 24,
    fontSize: 20,
    fontFamily: 'courierNew',
    color: '',
    textAlign: 'center',
    fontWeight: 'bold',

    

  },


 

});

export default Bookmark;


