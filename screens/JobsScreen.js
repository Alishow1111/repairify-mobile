import { useEffect, useState } from "react";
import {StyleSheet, View, Text, ScrollView} from "react-native";
import {Button, Card} from 'react-native-paper';
import { db, auth} from "../config";
import { collection,getDocs, query, where} from "firebase/firestore";




export default function Jobs({navigation}){

  const [jobs, setJobs] = useState([]);

  const user_id = auth.currentUser.uid;
  console.log(user_id)

  useEffect(() => {
    const q = query(collection(db, "jobs"), where("technician", "==", user_id));
    getDocs(q)
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data())
        setJobs((currentJobs) => {
          return [...currentJobs, {id: doc.id, data: doc.data()}]
        })
      })
    })
  }, [])

  console.log(jobs)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Jobs</Text>

            <ScrollView>
            {jobs.map((job) => {
              return (
                <Card style={{marginBottom: 20}}>
                    <Card.Title title={job.id} subtitle={"Due: " + job.data.due} />
                    <Card.Content>
                        <Text variant="titleLarge">{job.data.type}</Text>
                        <Text variant="bodyMedium">{job.data.description}</Text>
                    </Card.Content>
                    <View style={styles.buttonContainer}>
                        <Button 
                        mode="contained" 
                        onPress={() => navigation.navigate("Job", {job})} 
                        style={styles.button2}
                        >
                        View more
                        </Button>
                    </View>
                </Card>
              )
            })}
            </ScrollView>

            <Button mode="contained" style={styles.button} onPress={() => navigation.navigate("CustomerDetails", {setJobs})}>
                <Text style={styles.buttonText}>Add Job</Text>
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
    title : {
      color: "white",
      fontSize: 36,       // Increase the font size
      fontWeight: 'bold', // Make the font bold
      textAlign: 'center', // Center align text
      marginVertical: 20,
    },
    buttonText: {
      color: "black"
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: 10
    },
    button2: {
      backgroundColor: 'black'
    },
  });