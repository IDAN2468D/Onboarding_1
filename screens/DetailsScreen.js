import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Carusel from '../Components/Carusel';

function DetailsScreen({ route }) {

    const { itemId } = route.params;
    const [state, setstate] = useState([])


    useEffect(() => {
        setstate(itemId)
    }, [])

    return (
        <View>
            <FlatList
                data={state?.Nutrition}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <Carusel item={item} />
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default DetailsScreen