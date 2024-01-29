import { useState } from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import { TextInput, Button, Title, DataTable} from 'react-native-paper';
import { auth, db} from "../config";
import { collection, addDoc } from "firebase/firestore";



export default function CustomerDetails({route, navigation}){

    const {setJobs} = route.params;

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [town, setTown] = useState("");
    const [city, setCity] = useState("");
    const [postcode, setPostcode] = useState("");
    const [county, setCounty] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function nextScreen(){
      const customerObject = {
        name: name, 
        address: address, 
        town: town, 
        city: city,
        postcode: postcode, 
        county: county, 
        email: email,
        phone: phone
      };

      addDoc(collection(db, "customers"), customerObject)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        const newJobObject = {
          technician: auth.currentUser.uid,
          customerId: docRef.id
        }
        navigation.navigate('ProductDetails', {newJobObject, setJobs})
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
    }
    

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

        <TextInput
          label="Street Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
        />

        <TextInput
          label="Town"
          value={town}
          onChangeText={(text) => setTown(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
        />

        <TextInput
          label="City"
          value={city}
          onChangeText={(text) => setCity(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
        />

        <TextInput
          label="Post Code"
          value={postcode}
          onChangeText={(text) => setPostcode(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
        />

        <TextInput
          label="County"
          value={county}
          onChangeText={(text) => setCounty(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
        />

        <TextInput
          label="Email Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
        />

        <TextInput
          label="Telephone Number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
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

