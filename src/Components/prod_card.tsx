import axios from 'axios';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
interface props {
    style?: ViewStyle,
    name?: String,
}
const card: React.FC<props> = (props) => {
    const [isClicked, setIsClcked] = React.useState(false);
    return (
        <View>
            <TouchableOpacity style={[styles.card, props.style, { borderLeftColor: isClicked ? 'red' : 'white', borderLeftWidth: isClicked ? 5 : 0 }]} onPress={() => setIsClcked(res => !res)}>
                {props.children}
            </TouchableOpacity>
            {props.name && <Text style={[styles.text, { color: isClicked ? 'red' : 'black', width: 110 }]}>{props.name}</Text>}
        </View>
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
        fontSize: 15,
        textAlign: 'center'
    }
})
