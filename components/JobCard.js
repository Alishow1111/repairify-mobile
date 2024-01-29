import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StyleSheet, View} from 'react-native';


export default function JobCard({navigation, job}){
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
            style={styles.button}
            >
            View more
            </Button>
        </View>
    </Card>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: 10
    },
    button: {
      backgroundColor: 'black'
    },
  });