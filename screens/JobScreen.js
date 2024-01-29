import { useState } from "react";
import { StyleSheet, View} from "react-native";
import { ProgressBar, MD3Colors, Text, SegmentedButtons} from 'react-native-paper';


export default function Job({route}){

    const {job} = route.params;

    const [value, setValue] = useState("");

    return (
        <View style={styles.container}>

        <SegmentedButtons
            value={value}
            density="regular"
            theme={{ colors: { primary: 'green' } }}
            onValueChange={setValue}
            buttons={[
            {
                value: 'awaiting',
                label: 'Awaiting',
                checkedColor: 'red'
            },
            {
                value: 'in-progress', 
                label: 'In-Progress' 
            },
            {
                value: 'completed', 
                label: 'Completed' 
            },
            ]}
        />
           {/* <ProgressBar progress={0.5} color={MD3Colors.error50} />  */}
           <Text style={styles.title}>Product Details</Text>
            <Text style={styles.text}>Manufacturer: {job.data.manufactuer}</Text>
            <Text style={styles.text}>Product Type: {job.data.productType}</Text>
            <Text style={styles.text}>Serial Number: {job.data.serial}</Text>


           <Text style={styles.title}>Labour</Text>
            <Text style={styles.text}>Description: {job.data.description}</Text>
            <Text style={styles.text}>Work to be done: {job.data.work}</Text>


           <Text style={styles.title}>Parts</Text>
            <Text style={styles.text}>Will have all the parts here (To be added)</Text>

           <Text style={styles.title}>Quote</Text>
            <Text style={styles.text}>Qoute: </Text>
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
    title : {
        color: "white",
        fontSize: 36,       // Increase the font size
        fontWeight: 'bold', // Make the font bold
        // Center align text
        marginVertical: 20,
    },
    text: {
        color: "white", 
        fontWeight: 'bold'
    }


})
