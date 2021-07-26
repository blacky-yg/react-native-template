import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, FlatList, Image, TouchableWithoutFeedback } from 'react-native';

export default function Home() {
    const [dataLoading, finishLoading] = useState(true);
    const [newsData, setData] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tech&apiKey=f7a3b20ae6a24a0a8e694769c01995ca')
            .then((response) => response.json())
            .then((json) => setData(json.articles))
            .catch((error) => console.log(error))
            .finally(() => finishLoading(false))
    }, []);

    const storyItem = ({item}) => {
        return (
            <TouchableWithoutFeedback>

                <View style={styles.listings}>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>

                    <Image style={styles.img}
                        source={{
                            uri: item.urlToImage
                        }}
                    />
                    <Text style={styles.desc}>
                        {item.description}
                    </Text>
                 </View>

            </TouchableWithoutFeedback>
        );
    };

    return (
        <View style={styles.container}>
            {dataLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={newsData}
                    renderItem={storyItem}
                    keyExtractor={(item) => item.url}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20
    },
    img: {
        height: 100,
        width: '98%',
    },
    listings: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    title: {
        paddingBottom: 10,
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
    },
    desc: {
        fontFamily: 'OpenSans',
        fontStyle: 'italic'
    }
})