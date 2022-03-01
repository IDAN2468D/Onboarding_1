import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS } from '../StyleGide/colors';

function TabScreen({ focused, icons }) {
    return (
        <View>
            <Image
                source={icons}
                resizeMode="contain"
                style={{
                    width: 30,
                    height: 30,
                }}
                tintColor={focused ? COLORS.Onboarding : COLORS.black}
            />
        </View>
    )
}



export default TabScreen
