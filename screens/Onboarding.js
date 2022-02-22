import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS } from '../StyleGide/colors';

const slides = [
    {
        title: 'Save time by tracking your studies',
        text: 'Schedule your classes, assignments, quizzes and mor',
        image: require('../image/image_1.png'),
        backgroundColor: '#59b2ab',
    },
    {
        title: 'Stay on top of your education',
        text: 'Reduce your stress, increase your productivity',
        image: require('../image/image_2.png'),
        backgroundColor: '#febe29',
    },
    {
        title: 'Spend more time doing the things you love',
        text: 'Get started within five minutes',
        image: require('../image/image_3.png'),
        backgroundColor: '#22bcb5',
    }
];


function Onboarding() {

    const navigation = useNavigation();
    const keyExtractor = (item) => item.title;

    function _renderItem({ item }) {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
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
            <View style={styles.buttonCircle}>
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
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
    },
    image: {
        marginVertical: 60,
    },
    title: {
        fontSize: 24,
        color: COLORS.BlueMagenta,
        textAlign: "center",
        marginHorizontal: 60,
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