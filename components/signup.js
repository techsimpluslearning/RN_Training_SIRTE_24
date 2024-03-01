import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Platform, Keyboard, TouchableWithoutFeedback, Image } from "react-native";
import CustomTextInput from './textInput'

const Register = () => {


  function onLoginClick(){
  }


  return (
    <View style={[styles.container]}>
        <View style = {styles.titleContainer}>
            <Text style = {styles.title}>Create Account</Text>
            <Text style = {styles.subTitle}>Create an account so you can explore all the existing jobs</Text>
        </View>

        <CustomTextInput  placeholder = "Username" />
        <CustomTextInput placeholder = "Password" />
        <CustomTextInput placeholder = "Email" />
    
      
        <TouchableOpacity onPress={onLoginClick} style={styles.loginBtn}>
          <Text style = {styles.loginText}>SignUp</Text>
        </TouchableOpacity>

        <Text style = {styles.orCw}>Or continue with</Text>

        <View style = {styles.iconContainer}>
            <View style = {styles.iconCard}>
                <Image source={require("../assets/google.png")} />
            </View>
            <View style = {styles.iconCard}>
            <Image source={require("../assets/facebook.png")} />
            </View>
            <View style = {styles.iconCard}>
            <Image source={require("../assets/apple.png")} />
            </View>
        </View>
      </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  iconContainer:{
    flexDirection:"row",
    gap:10
  },

  iconCard:{
    width:60,
    height:40,
    backgroundColor:"black",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },

  orCw:{ 
    fontSize:20,
    fontWeight:"600",
    color:"#1F41BB",
    marginVertical:20
  },

  titleContainer:{
    marginTop:97,
    alignItems:"center",
  },

  title:{
    fontSize:30,
    color:"#1F41BB",
    marginBottom:6,
    fontWeight:"700"
  },

  subTitle:{
      width:326,
      textAlign:"center",
      marginBottom:40
  },

  loginText: {
    color: "#fff",
    fontSize:30,
    fontWeight:"700"
  },
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
  },
  loginBtn:{
    width:"70%",
    backgroundColor:"darkblue",
    height:60,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    marginTop:40

  },

  textInput:{
    backgroundColor:"#F1F4FF",
    borderColor: Platform.OS === 'ios' ? "#1F41BB" : "red",
    borderWidth:2,
    width:357,
    height:60,
    borderRadius:10,
    marginVertical:10,
    paddingLeft:20
  }
});
