
import React from "react";
import { StyleSheet, Text, View ,Button,TextInput,Image,Picker} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { borderBottomColor, textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';




function HomeScreen({ navigation }) {
  return (
    <>
    <View style={{ flex: 1, alignItems: 'center',justifyContent:"center", backgroundColor:"white" }}>
    <View style={styles.logo}>
    <Image style={styles.logo} source = {require('./assets/logo.png')} />
    </View>
    <Text>Welcome to Bloodlytics</Text>
       <View style={[{ width: "90%", margin: 10, backgroundColor: "red" ,borderRadius: 5,overflow:"hidden",}]}>
      <Button
        title="login"
        color={"red"}
        onPress={() => navigation.navigate('Login')}
      />
      
      </View>
      <View style={[{ width: "90%", margin: 10, backgroundColor: "red"  ,borderRadius:5}]}>
      <Button color={"red"} 
        title="Signup"
        onPress={() => navigation.navigate('Signup')}
      />
      </View>
    </View>
    </>

  );
}
export default HomeScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      color: "red",
      fontSize:29,
      paddingTop:100
    },
    p:{
      color: "#0c0c0c",
      fontSize:12,
      paddingTop:0,
      textAlign:"center",
      fontWeight:"bold",
      flexDirection:"column",
      alignSelf:"center",
     
   
    },
    A:{
      color: "#999",
      height: 30,
      width: 200,
      fontSize:15,
      textAlign:"left",
    
      borderColor:"white",
      borderWidth:1,
      
      flexDirection:"column",
      alignSelf:"flex-start",
      marginLeft:18
    },
    TEXT:{
      borderBottomColor:"red",borderColor:"white",width: "90%",borderWidth:1,paddingBottom:5,marginBottom:10
    },
    Password:{
      borderBottomColor:"red",borderTopColor:"red",borderColor:"white",height:42,width: "90%",borderWidth:1,paddingBottom:5,marginBottom:10
    },
    BUTTON:{
      width: "90%",
      color: "red"
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 100,
      height: 100,
      alignSelf: "center",
   
    
      
    },
  
  
  });
  