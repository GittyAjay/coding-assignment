import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
interface props {
    style?: ViewStyle,
    text: string,
    onPress?: () => void
}
const button: React.FC<props> = (props) => {
    return (
        <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default button

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4C5270',
        padding: 20,
        borderRadius: 10,
        height: 70
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})
