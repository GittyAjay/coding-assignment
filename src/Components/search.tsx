import React from 'react'
import { StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import Aicon from 'react-native-vector-icons/AntDesign';
interface props {
    style?: ViewStyle
}
const search: React.FC<props> = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <Aicon name="search1" size={25} style={{ paddingRight: 5 }} color="grey" />
            <TextInput style={styles.text} placeholder="Search for brand and product" />
        </View>
    )
}

export default search

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 2,
        flexDirection: 'row',
        backgroundColor: '#e6e9e7',
        borderRadius: 5
    },
    text: {
        fontSize: 18,
        color: 'grey',
        flex: 1
    }
})
