import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const windowWidth = Dimensions.get('window').width;

function Carusel({ item }) {
    return (
        <View>
            <Swiper style={styles.wrapper} loop={true} autoplay={true}>
                <View>
                    <Image source={{ uri: item.Fat }} resizeMode="cover" style={{ width: windowWidth, height: 300 }} />
                </View>
                <View>
                    <Image source={{ uri: item.Potassium }} resizeMode="cover" style={{ width: windowWidth, height: 300 }} />
                </View>
                <View>
                    <Image source={{ uri: item.Selenium }} resizeMode="cover" style={{ width: windowWidth, height: 300 }} />
                </View>
                <View>
                    <Image source={{ uri: item.VitaminB9 }} resizeMode="cover" style={{ width: windowWidth, height: 300 }} />
                </View>
                <View>
                    <Image source={{ uri: item.VitaminA }} resizeMode="cover" style={{ width: windowWidth, height: 300 }} />
                </View>
                <View>
                    <Image source={{ uri: item.VitaminK }} resizeMode="cover" style={{ width: windowWidth, height: 300 }} />
                </View>
                <View>
                    <Image source={{ uri: item.Zinc }} resizeMode="cover" style={{ width: windowWidth, height: 300 }} />
                </View>
                <View>
                    <Image source={{ uri: item.image_1 }} resizeMode="cover" style={{ width: windowWidth, height: 300 }} />
                </View>
                <View>
                    <Image source={{ uri: item.Phosphorous }} resizeMode="cover" style={{ width: windowWidth, height: 300 }} />
                </View>
                <View>
                    <Image source={{ uri: item.image_2 }} resizeMode="cover" style={{ width: windowWidth, height: 300 }} />
                </View>
                <View>
                    <Image source={{ uri: item.image_3 }} resizeMode="cover" style={{ width: windowWidth, height: 300 }} />
                </View>
                <View>
                    <Image source={{ uri: item.image_4 }} resizeMode="cover" style={{ width: windowWidth, height: 300 }} />
                </View>

            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 300,
    }
})

export default Carusel