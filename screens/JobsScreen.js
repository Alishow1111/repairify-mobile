import { useState } from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import { TextInput, Button, Title, DataTable} from 'react-native-paper';


export default function Jobs({navigation}){

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
            
            <DataTable.Row>
                <DataTable.Cell><Text style={styles.col_title}>1</Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.col_title}>Repair</Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.col_title}>20/01/24</Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.col_title}>In Progress</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell><Text style={styles.col_title}>2</Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.col_title}>Maintenance</Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.col_title}>20/02/05</Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.col_title}>Completed</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell><Text style={styles.col_title}>3</Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.col_title}>Installation</Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.col_title}>20/03/12</Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.col_title}>Pending</Text></DataTable.Cell>
            </DataTable.Row>
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