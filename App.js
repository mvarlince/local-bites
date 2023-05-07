import { StatusBar } from 'expo-status-bar';
import { createContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const RestaurantContext = createContext()

export default function App() {

  const [selectedRestaurant, setSelectedRestaurant] = useState()

  return (
    <NavigationContainer>
      <RestaurantContext.Provider value = {{selectedRestaurant, setSelectedRestaurant}} >
        <StackNavigator>
          
        </StackNavigator>
      </RestaurantContext.Provider>
    </NavigationContainer>
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
