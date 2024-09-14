import React, { useState } from 'react'
import { View,Text, Button, TextInput, StyleSheet } from 'react-native'
import styles2 from "./style.js"
import Props from './components/props.js'

const App = () => {

  const [name, setName] = useState('Vikas')

  // const btnClick = () => {
  //   setName("Kashyap")
  // }

  return (
   <View>
     {/* <Text style={{color:'red', fontSize:30}}>{name} </Text>
     <Button title='Click' onPress={btnClick}/> */}
     <Text style={{color:'red', fontSize:30}}>{name? name : "No Name"} </Text>
     <TextInput style={styles2.textInput2} placeholder='Enter Name' value={name} onChangeText={(text)=>setName(text)}/>
     <Button title='Clear' onPress={()=>setName('')}/> 
      <Props name={name}/>
   </View>
  )
}

export default App

const styles = StyleSheet.create({
  textInput:{
    fontSize:30,
    borderWidth:2,
    borderColor:"blue",
    margin:10,
    padding:10,
    
  }
})
