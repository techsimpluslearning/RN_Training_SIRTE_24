import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Platform, Keyboard, TouchableWithoutFeedback, Image } from "react-native";
import Register from "./components/signup";
import Login from "./components/login";
import Home from "./components/home";
import Loader from "./components/loader";
import Content from "./components/content";
import { StatusBar } from "expo-status-bar";

const App = () => {

  const [page, setPage] = useState("home")

  const onPageUpdateClick = (pageName) => {
    setPage(pageName)
    if(pageName === "loader"){
      setTimeout(() => {
        setPage("content")
      }, 3200) 
    }
  } 

  return (
    <View style = {{flex:1}}>
    <StatusBar style={"light"} />
      <TouchableWithoutFeedback onPress={function (){
        Keyboard.dismiss()
      }}>
        <View>
        {page === "signup" && <Register onChange = {onPageUpdateClick}/>}
        {page === "login" && <Login onChange = {onPageUpdateClick}/>}
        {page === "home" && <Home onChange = {onPageUpdateClick} />}
        {page === "loader" && <Loader/>}
        {page === "content" && <Content />}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default App;

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


