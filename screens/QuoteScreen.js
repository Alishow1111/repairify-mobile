import { useState } from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import { TextInput, Button, Title, DataTable} from 'react-native-paper';
import { db } from "../config";
import { collection, addDoc } from "firebase/firestore";


export default function Quote({route, navigation}){

    const {newJobObject} = route.params;

    console.log(newJobObject);

    const [partsCost, setPartsCost] = useState("");
    const [labourCost, setLabourCost] = useState("");

    function submit(){
      newJobObject.partsCost = partsCost;
      newJobObject.labourCost = labourCost;

      addDoc(collection(db, "jobs"), newJobObject)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });

      navigation.navigate('Jobs')
    }

    return (
       <View style={styles.container}>
        <Title style={styles.title}>Quote</Title>

        <TextInput
          label="Parts Cost"
          value={partsCost}
          onChangeText={(text) => setPartsCost(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
        />

        <TextInput
          label="Labour Cost"
          value={labourCost}
          onChangeText={(text) => setLabourCost(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
        />

        <Button mode="contained" style={styles.button} onPress={() => submit()}>
            <Text style={styles.buttonText}>Complete</Text>
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

