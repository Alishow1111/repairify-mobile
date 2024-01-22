import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/LoginScreen';
import { PaperProvider } from 'react-native-paper';
import Jobs from './screens/JobsScreen';
import CustomerDetails from './screens/CustomerDetailsScreen';
import Labour from './screens/LabourScreen';
import ProductDetails from './screens/ProductDetailsScreen';
import Parts from './screens/PartsScreen';
import Quote from './screens/QuoteScreen.js';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Jobs" component={Jobs} />
          <Stack.Screen name="CustomerDetails" component={CustomerDetails} />
          <Stack.Screen name="Labour" component={Labour} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Parts" component={Parts} />
          <Stack.Screen name="Quote" component={Quote} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
