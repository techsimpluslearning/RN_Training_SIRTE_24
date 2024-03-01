import { View, Text, StyleSheet } from "react-native";
import { Easing } from "react-native-reanimated"
import { MotiView } from "moti"

const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      {/* <MotiView style ={ styles.loader} /> */}
      <MotiView  style ={ styles.loader} from={{ opacity: 1, rotate:"0deg", scale:0.5 }} animate={{ opacity: 1, rotate:"360deg", scale:1.5 }}  transition={{
            type: 'timing',
            duration: 1000,
            delay:200,
            loop:true,
            rotate: {
                repeatReverse: false,
                easing: Easing.linear
              }
  }} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width:100,
    height:100,
    borderRadius:"50%",
    backgroundColor:"white",
    borderColor:"#fcc",
    borderWidth:10,
    elevation:10,
    shadowColor:"red",
    shadowOffset:{height:0, width:0},
    shadowOpacity:0.5,
    borderBottomColor:"red"
  },
});
