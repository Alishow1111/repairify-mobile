import { useState } from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import { TextInput, Button, Title, DataTable} from 'react-native-paper';


export default function ProductDetails({route, navigation}){

    const {newJobObject} = route.params;

    console.log(newJobObject);

    const [manufacturer, setManufacturer] = useState("");
    const [productType, setProductType] = useState("");
    const [serial, setSerial] = useState("");

    function nextScreen(){
      newJobObject.manufacturer = manufacturer;
      newJobObject.productType = manufacturer;
      newJobObject.serial = manufacturer;

      navigation.navigate('Labour', {newJobObject})
    }

    

    return (
       <View style={styles.container}>
        <Title style={styles.title}>Product Details</Title>

        <TextInput
          label="Product Manufacturer"
          value={manufacturer}
          onChangeText={(text) => setManufacturer(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
        />

        <TextInput
          label="Product Type"
          value={productType}
          onChangeText={(text) => setProductType(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
        />

        <TextInput
          label="Serial Number"
          value={serial}
          onChangeText={(text) => setSerial(text)}
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

