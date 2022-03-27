import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from '../StyleGide/Icons';
import { COLORS } from '../StyleGide/colors';
import HomeScreen from '../screens/HomeScreen';
import Notifications from '../screens/Notifications';
import Account from '../screens/Account';
import Feed from '../screens/Feed';
import * as Animatable from 'react-native-animatable';

const TabArr = [
    { route: 'Account', label: 'Account', type: Icons.User, component: Account, color: COLORS.Onboarding, alphaClr: COLORS.white },
    { route: 'cart', label: 'Cart', type: Icons.icons_1, component: Feed, color: COLORS.Onboarding, alphaClr: COLORS.white },
    { route: 'notifications', label: 'Notifications', type: Icons.Star, component: Notifications, color: COLORS.Onboarding, alphaClr: COLORS.white },
    { route: 'home', label: 'Home', type: Icons.Bag, component: HomeScreen, color: COLORS.Onboarding, alphaClr: COLORS.white },

];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const textViewRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
            textViewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
        } else {
            viewRef.current.animate({ 0: { scale: 1, }, 1: { scale: 0, } });
            textViewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
        }
    }, [focused])

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[styles.container, { flex: focused ? 1 : 0.65 }]}>
            <View>
                <Animatable.View
                    ref={viewRef}
                    style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 16 }]} />
                <View style={[styles.btn, { backgroundColor: focused ? null : item.alphaClr }]}>
                    <Image source={item.type} color={focused ? COLORS.white : COLORS.blue} />
                    <Animatable.View
                        ref={textViewRef}>
                        {focused && <Text style={{
                            color: COLORS.white, paddingHorizontal: 8
                        }}>{item.label}</Text>}
                    </Animatable.View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default function AnimTab3() {
    return (
        <Tab.Navigator
            initialRouteName='home'
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 90,
                }
            }}
        >
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarButton: (props) => <TabButton {...props} item={item} />
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        alignItems: 'center',
        padding: 8,
        borderRadius: 16,
    }
})