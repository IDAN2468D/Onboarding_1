import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS } from '../StyleGide/colors';
import FONTS from '../StyleGide/Fonts';

function FromInput({
    containerStyle,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = ""
}) {
    return (
        <View style={{ ...containerStyle }}>
            <View style={{ flexDirection: 'row', justifyContent: "flex-end", marginHorizontal: 50, marginVertical: 5 }}>
                <Text style={{ color: COLORS.red, ...FONTS.h1, fontWeight: "bold" }}>{errorMsg}</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: 50,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 10,
                    backgroundColor: COLORS.white,
                }}
            >
                {prependComponent}
                <TextInput style={{
                    flex: 1,
                    ...inputStyle
                }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.black}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text) => onChange(text)}
                />
                {appendComponent}
            </View>
        </View>
    )
}

export default FromInput