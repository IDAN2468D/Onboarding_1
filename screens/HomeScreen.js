import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import Category from '../Components/Category';

const shopURL = "https://rocky-lake-73739.herokuapp.com/foods";


function HomeScreen() {

    const [isLoading, setIsLoading] = useState(true)
    const [shop, setShop] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        fetch(shopURL)
            .then((response) => response.json())
            .then((json) => setShop(json))
            .catch((error) => alert(error))
            .finally(() => setIsLoading(false));
    }, [])

    return (
        <View>
            {isLoading ? <ActivityIndicator size="large" color="#00ff00" /> : (
                <FlatList
                    data={shop}
                    keyExtractor={item => `${item.id}`}
                    keyboardDismissMode="on-drag"
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <Category
                                item={item}
                                onPress={() => navigation.navigate("DetailsScreen", { itemId: item })}
                            />
                        )
                    }}
                />
            )}
        </View>
    )
}

export default HomeScreen