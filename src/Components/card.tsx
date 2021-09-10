import axios from 'axios';
import React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

interface props {
    style?: ViewStyle,
    name: Array<String>,
    species: Array<String>,
    films: Array<String>,
    starships: Array<String>
}
const card: React.FC<props> = (props) => {
    console.log("names", props.name);
    return (
        <View style={[styles.card, props.style]}>
            {props.name.length > 0 && <Text style={styles.text}>{props.name}</Text>}
            {/* {props.species && <View style={{ flexDirection: 'row' }}>
                {props.species.map(spec => {
                    return (
                        <Text style={styles.text}>{spec}</Text>
                    )
                })}
            </View>} */}
            {/* {props.films && <View style={{ flexDirection: 'row' }}>
                {props.films.map(films => {
                    return (
                        <Text style={styles.text}>{films}</Text>
                    )
                })}
            </View>}
            {props.starships && <View style={{ flexDirection: 'row' }}>
                {props.starships.map(starships => {
                    return (
                        <Text style={styles.text}>{starships}</Text>
                    )
                })}
            </View>} */}
        </View>
    )
}

export default card

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 200,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#BCECE0',
        borderRadius: 10,
        padding: 10
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
