import { useState } from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import { TextInput, Button, Title, DataTable} from 'react-native-paper';


export default function Parts({route,navigation}){

    const {newJobObject} = route.params;

    console.log(newJobObject);

    const [part, setPart] = useState("");
    const [price, setPrice] = useState("");

    function nextScreen(){
      newJobObject.part = part;
      newJobObject.price = price;

      navigation.navigate('Quote', {newJobObject})
    }


    return (
       <View style={styles.container}>
        <Title style={styles.title}>Parts</Title>

        <TextInput
          label="Part Name"
          value={part}
          onChangeText={(text) => setPart(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
        />

        <TextInput
          label="Part Price"
          value={price}
          onChangeText={(text) => setPrice(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
        />

        <Button mode="contained" style={styles.button} onPress={() => nextScreen()}>
            <Text style={styles.buttonText}>Next</Text>
        </Button>
        
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 10,
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

