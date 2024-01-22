import { useState } from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import { TextInput, Button, Title, DataTable} from 'react-native-paper';


export default function CustomerDetails({navigation}){

    const [name, setName] = useState("");

    return (
       <View style={styles.container}>
        <Title style={styles.title}>Customer Details</Title>

        <TextInput
          label="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
        />
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: "black"
    },
    input: {
      marginVertical: 8,
      backgroundColor: "#2c2c2c",
      activeOutlineColor: "#ffffff",
    },
    button: {
      marginTop: 16,
      backgroundColor: "white",
    },
    text : {
      color: "white"
    },
    title : {
        color: "white"
    },
    buttonText: {
      color: "black"
    }
  });

