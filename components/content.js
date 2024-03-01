import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";

const Content = () => {
  const [theme, setTheme] = useState("light");
  const styles = getStyles(theme)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is My Content</Text>
      <Switch
        onChange={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        value={theme === "dark"}
      />
    </View>
  );
};


const getStyles = (mode) => {
    const styles = StyleSheet.create({
        container: {
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: mode === "dark" ? "#101010" : "white",
        },
        text: {
          color: mode === "dark" ? "white" : "#101010",
          fontSize:20,
          fontWeight:"500",
          marginBottom:10
        },
      });

      return styles
}



export default Content;
