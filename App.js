import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/Onboarding';
import DrawerNavigation from './navigation/DrawerNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding'>
        <Stack.Screen name="Home" component={DrawerNavigation} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App