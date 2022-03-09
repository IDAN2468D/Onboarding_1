import React from 'react';
import { View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TopNavigation from '../../navigation/TopNavigation';
import { COLORS } from '../../StyleGide/colors';
import images from '../../StyleGide/iamge';


function AuthLayout({ children }) {
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}
        >
            <View style={{ alignItems: 'center' }}>
                <Image source={images.Logo} resizeMode="contain" style={{ width: 400, height: 300 }} />
            </View>

            <View style={{ height: 600 }}>
                <TopNavigation />
            </View>
            {children}
        </KeyboardAwareScrollView>
    )
}

export default AuthLayout
