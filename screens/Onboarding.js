import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import image from '../StyleGide/iamge';
import { COLORS } from '../StyleGide/colors';

const slides = [
    {
        title: 'Save time by tracking your studies',
        text: 'Schedule your classes, assignments, quizzes and mor',
        image: require('../image/image_1.png'),
    },
    {
        title: 'Set preferences for multiple users from various restaurants!',
        text: 'Reduce your stress, increase your productivity',
        image: require('../image/image_2.png'),
    },
    {
        title: 'Spend more time doing the things you love',
        text: 'Get started within five minutes',
        image: require('../image/image_3.png'),
    }
];


function Onboarding() {

    const navigation = useNavigation();
    const keyExtractor = (item) => item.title;

    function _renderItem({ item }) {
        return (
            <View style={styles.slide}>
                <View style={{ paddingHorizontal: 10, paddingVertical: 10, borderRadius: 50, backgroundColor: "white" }}>
                    <Image source={image.Logo} style={{ width: 50, height: 50 }} />
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} style={styles.image} />
            </View>
        );
    }

    function _renderNextButton() {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="caret-back-outline"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    };

    function _renderDoneButton() {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
        );
    };

    function _renderPrevButton() {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        )
    }

    function _renderSkipButton() {
        return (
            <View style={styles.skip}>
                <Icon
                    name="play-skip-back-sharp"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        )
    }

    return (
        <AppIntroSlider
            data={slides}
            keyExtractor={keyExtractor}
            renderItem={_renderItem}
            dotStyle={styles.DotStyle}
            renderSkipButton={_renderSkipButton}
            activeDotStyle={styles.ActiveDotStyle}
            showSkipButton={true}
            renderDoneButton={_renderDoneButton}
            renderNextButton={_renderNextButton}
            renderPrevButton={_renderPrevButton}
        />
    )
}

const styles = StyleSheet.create({
    buttonCircle: {
        width: 50,
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skip: {
        bottom: 750,
        width: 50,
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.Onboarding,
    },
    image: {
        marginVertical: 60,
    },
    title: {
        fontSize: 30,
        color: COLORS.white,
        maxWidth: 300,
        textAlign: "center",
        marginHorizontal: 40,
        marginTop: 10,
    },
    text: {
        fontSize: 14,
        color: COLORS.black,
        textAlign: "center",
        marginTop: 20,
        marginHorizontal: 60,
        marginTop: 20,
    },
    DotStyle: {
        backgroundColor: COLORS.gray,
    },
    ActiveDotStyle: {
        backgroundColor: COLORS.BlueMagenta,
    }
});


export default Onboarding