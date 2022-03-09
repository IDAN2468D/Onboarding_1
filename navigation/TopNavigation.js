import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LogInScreen from '../screens/Authentication/LogInScreen';
import SingUpScreen from '../screens/Authentication/SingUpScreen';
import { COLORS } from '../StyleGide/colors';

const Tab = createMaterialTopTabNavigator();

function TopNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold', color: COLORS.black },
                tabBarStyle: { borderBottomRightRadius: 30, borderBottomLeftRadius: 30 },
                tabBarIndicatorStyle: { borderColor: COLORS.Onboarding, borderWidth: 2 }
            }}
        >
            <Tab.Screen name="SingUp" component={SingUpScreen} />
            <Tab.Screen name="LogIn" component={LogInScreen} />
        </Tab.Navigator>
    );
}

export default TopNavigation