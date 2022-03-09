import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function LoginButton({ buttonText, onPress, containerStyle, StyleText, disabled }) {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress}>
            <View style={{ ...containerStyle }}>
                <Text style={{ ...StyleText }}>{buttonText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default LoginButton