import axios from 'axios';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
interface props {
    style?: ViewStyle,
    name?: String,
    onPress?: () => void,
    clicked_name?: string
}
const card: React.FC<props> = (props) => {
    console.log(props.clicked_name);

    return (
        <TouchableOpacity style={[styles.card, props.style, { borderLeftColor: props.clicked_name == props.name ? 'red' : 'white', borderLeftWidth: props.clicked_name ? 5 : 0 }]} onPress={props.onPress}>
            {props.children}
            {props.name && <Text style={[styles.text, { color: props.clicked_name == props.name ? 'red' : 'black', width: 110 }]}>{props.name}</Text>}
        </TouchableOpacity>
    )
}

export default card

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        elevation: 2,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
