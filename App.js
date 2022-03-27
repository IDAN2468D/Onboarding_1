import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './navigation/TabNavigation';
import Onboarding from './screens/Onboarding';
import AuthLayout from './screens/Authentication/AuthLayout';
import ForgetPassword from './screens/Authentication/ForgetPassword';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Layout" component={AuthLayout} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;