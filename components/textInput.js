import {TextInput, StyleSheet, Platform} from "react-native"


const CustomTextInput = (data) => {
        return (
            <TextInput
                secureTextEntry = {data.placeholder === "Password"}
                placeholder={data.placeholder} 
                placeholderTextColor={"#626262"} 
                style = {styles.textInput} />
        )
}

const styles = StyleSheet.create({
    textInput:{
      backgroundColor:"#F1F4FF",
      borderColor: Platform.OS === 'ios' ? "#1F41BB" : "red",
      borderWidth:2,
      width:357,
      height:60,
      borderRadius:10,
      marginVertical:13,
      paddingLeft:20
    }
  });
  


export default CustomTextInput