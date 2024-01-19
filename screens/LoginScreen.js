import { useState } from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import { TextInput, Button, Title} from 'react-native-paper';
import { signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../config";
import { useNavigationBuilder } from "@react-navigation/native";


export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [buttonDisabled, setButtonDisabled] = useState(false);

  function handleSubmit() {
    //setButtonDisabled(true);
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        setEmail("");
        setPassword("");
        console.log("signed in")
        navigation.navigate("Jobs")
    })
  }

  return (
    <>
    <View style={styles.container}>
      <Title style={styles.text}>Login</Title>

      <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
      />

        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  buttonText: {
    color: "black"
  }
});