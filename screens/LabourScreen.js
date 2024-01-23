import { useState } from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import { TextInput, Button, Title, DataTable} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Labour({route, navigation}){

    const {newJobObject} = route.params;

    console.log(newJobObject);

    const [description, setDescription] = useState("");
    const [work, setWork] = useState("");
    const [selectedValue, setSelectedValue] = useState(null);
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);


    const data = [
      { label: 'Repair', value: 'Repair' },
      { label: 'Maintenance', value: 'Maintenance' },
      { label: 'Installation', value: 'Installation' },
    ];

    function nextScreen(){
      newJobObject.description = description;
      newJobObject.work = work;
      newJobObject.type= selectedValue;
      newJobObject.due= String(date);

      navigation.navigate('Parts', {newJobObject})
    }

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShowDatePicker(Platform.OS === 'ios' ? true : false); // Close the picker on iOS
      setDate(currentDate);
    };
  
    const showDatepicker = () => {
      setShowDatePicker(true);
    };

    return (
       <View style={styles.container}>
        <Title style={styles.title}>Labour</Title>

        <RNPickerSelect
          onValueChange={(value) => setSelectedValue(value)}
          items={data}
          value={selectedValue}
          placeholder={{ label: 'Select Type', value: null }}
          style={pickerSelectStyles}
        />

        <TextInput
          label="Describe The Issue"
          value={description}
          onChangeText={(text) => setDescription(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
        />

        <TextInput
          label="Work To Be Done"
          value={work}
          onChangeText={(text) => setWork(text)}
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#949494', underlineColor: 'transparent'}}}
          textColor="#ffffff"
          autoCapitalize="none"
        />

        
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
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

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'white',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'white',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

