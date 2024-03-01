import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Platform, Keyboard, TouchableWithoutFeedback, Image } from "react-native";


const Home = (data) => {

  return (
    <View style={[styles.container]}>

        <View style = {styles.imageContainer}>
            <Image source={require("../assets/home.png")} />
        </View>

        <View style = {styles.titleContainer}>
            <Text style = {styles.title}>Create Account</Text>
            
            <Text style = {styles.subTitle}>Create an account so you can explore all the existing jobs</Text>
        </View>

      
        <View style = {styles.btnContainer}>
            <TouchableOpacity onPress={() => data.onChange("login")} style={styles.loginBtn}>
                <Text style = {styles.loginText}>Login Now</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => data.onChange("signup")} style={[styles.loginBtn, {backgroundColor:"white"}]}>
                <Text style = {[styles.loginText, {color:"black"}]}>Register</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  iconContainer:{
    flexDirection:"row",
    gap:10
  },

  btnContainer:{
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
    marginTop:17,
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
    fontSize:22,
    fontWeight:"700"
  },
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
  },
  loginBtn:{
    width:130,
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
