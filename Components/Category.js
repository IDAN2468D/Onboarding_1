import React from 'react';
import { View, Text, Image, StyleSheet, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../StyleGide/colors';
import { FONTS } from '../StyleGide/Fonts';

const radius = 20;


function Category({ item, onPress }) {
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={{ position: "absolute", backgroundColor: COLORS.black, zIndex: 2, paddingHorizontal: 7, paddingVertical: 6, borderTopLeftRadius: 10, borderBottomRightRadius: 10, flexDirection: 'row' }}>
                    <Icon name="fire" size={22} color={COLORS.white} />
                    <Text style={{ color: COLORS.white, fontSize: 14 }}> {item.Percentages} ספונטנים צפו בדיל היום</Text>
                </View>
                <View style={{ position: "absolute", backgroundColor: COLORS.white, zIndex: 2, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 30, bottom: 92, left: 20, elevation: 10 }}>
                    <Text style={{ color: COLORS.black, fontSize: 14, fontWeight: 'bold' }}>נותרו 7 חדרים</Text>
                </View>
                <View style={{ position: "absolute", backgroundColor: COLORS.Percent, zIndex: 2, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 30, bottom: 92, right: 20 }}>
                    <Text style={{ color: COLORS.black, fontSize: 14, fontWeight: 'bold' }}>30% הנחה</Text>
                </View>
                <Image source={{ uri: item.image }} resizeMode="cover" style={{ width: "100%", height: 200, borderTopLeftRadius: radius, borderTopRightRadius: radius }} />
                <View style={{ paddingHorizontal: 15, paddingVertical: 25, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: COLORS.black, ...FONTS.h1 }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', marginVertical: 6 }}>
                            <Text style={{ fontSize: 14, fontWeight: "bold", color: COLORS.black }}>{item.description}</Text>
                            <View style={{ height: 20, backgroundColor: COLORS.black, width: 2, marginHorizontal: 10 }} />
                            <Text style={{ fontSize: 14, fontWeight: "bold", color: COLORS.black }}>{item.NutritionName}</Text>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 50 }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: COLORS.blue }}>₪{item.price}</Text>
                        <Text style={{ fontSize: 16, textDecorationLine: "line-through", fontWeight: '900', color: COLORS.black }}>₪{item.DiscountPercentages}</Text>
                    </View>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        marginTop: 25,
        borderRadius: radius,
        marginHorizontal: 10,
        elevation: 10
    },
})

export default Category