import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import FromInput from '../../Components/FromInput';
import { COLORS } from '../../StyleGide/colors';
import FONTS from '../../StyleGide/Fonts';
import { utils } from '../../utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginButton from '../../Components/LoginButton';


function LogInScreen() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [showPss, setShowPss] = useState(false)
    const navigation = useNavigation();

    function isEnableSignInEmail() {
        return email != "" && emailError == "" && password != "" && passwordError == ""
    }


    return (
        <View style={{ position: "absolute", top: 30, left: 0, right: 0 }}>
            <View style={{ marginHorizontal: 50 }}>
                <Text style={{ ...FONTS.h1, fontSize: 25, color: COLORS.Onboarding, fontWeight: 'bold' }}>LogIn</Text>
            </View>
            <FromInput
                placeholder="Email Address"
                autoCompleteType='email'
                onChange={(value) => {
                    utils.validateEmail(value, setEmailError)
                    setEmail(value)
                }}
                inputStyle={{
                    ...FONTS.h1,
                    fontWeight: 'bold',
                    textDecorationLine: "none",
                }}
                errorMsg={emailError}
            />
            <FromInput
                placeholder="Password"
                errorMsg={passwordError}
                secureTextEntry={!showPss}
                onChange={(value) => {
                    utils.validatePassword(value, setPasswordError)
                    setPassword(value)
                }}
                inputStyle={{
                    ...FONTS.h1,
                    fontWeight: 'bold',
                    textDecorationLine: "none"
                }}
                appendComponent={
                    <View
                        style={{
                            position: "absolute",
                            top: 23,
                            left: 20
                        }}
                    >
                        <TouchableOpacity onPress={() => setShowPss(!showPss)}>
                            <Icon
                                name={showPss ? "eye" : "eye-slash"}
                                size={20} color={COLORS.black}
                            />
                        </TouchableOpacity>
                    </View>
                }
            />
            <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 50, justifyContent: "flex-end" }}>
                    <Text style={{ ...FONTS.h1, color: COLORS.Onboarding }}>
                        Forgot Password?
                    </Text>
                </View>
            </TouchableOpacity>
            <View>
                <LoginButton
                    buttonText="Login"
                    disabled={isEnableSignInEmail() ? false : true}
                    containerStyle={{
                        paddingVertical: 20,
                        marginHorizontal: 50,
                        alignItems: "center",
                        marginTop: 20,
                        borderRadius: 30,
                        backgroundColor: isEnableSignInEmail() ? COLORS.BlueMagenta : COLORS.Onboarding,
                    }}
                    StyleText={{
                        color: COLORS.white,
                        ...FONTS.h1,
                    }}
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
        </View>
    )
}

export default LogInScreen