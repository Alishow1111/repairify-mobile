import { useEffect, useState } from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import { TextInput, Button, Title, DataTable} from 'react-native-paper';
import { db, auth} from "../config";
import { collection, doc, getDoc, getDocs, query, where} from "firebase/firestore";



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
          return [...currentJobs, doc.data()];
        })
      })
    })
  }, [])

  console.log(jobs)

  // useEffect(() => {
  //   console.log(jobs); // Log the updated jobs array
  // }, [jobs]);

    return (
        <View style={styles.container}>
            <Title style={styles.title}>Your Jobs</Title>

            <DataTable style={styles.table}>
            <DataTable.Header>
                <DataTable.Title><Text style={styles.col_title}>Job ID</Text></DataTable.Title>
                <DataTable.Title><Text style={styles.col_title}>Type</Text></DataTable.Title>
                <DataTable.Title><Text style={styles.col_title}>Due</Text></DataTable.Title>
                <DataTable.Title><Text style={styles.col_title}>Status</Text></DataTable.Title>
            </DataTable.Header>

            {jobs.map((job) => {
              return (
                <DataTable.Row>
                  <DataTable.Cell><Text style={styles.col_title}>1</Text></DataTable.Cell>
                  <DataTable.Cell><Text style={styles.col_title}>{job.type}</Text></DataTable.Cell>
                  <DataTable.Cell><Text style={styles.col_title}>{job.due}</Text></DataTable.Cell>
                  <DataTable.Cell><Text style={styles.col_title}>Not Started</Text></DataTable.Cell>
                </DataTable.Row>
              )
            })}
      

            
            </DataTable>

            <Button mode="contained" style={styles.button} onPress={() => navigation.navigate("CustomerDetails")}>
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
    table: {
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
      color: "white"
    },
    col_title: {
        color: "white"
    },
    buttonText: {
      color: "black"
    }
  });