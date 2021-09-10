import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, FlatList, Text, TouchableOpacity } from 'react-native'
import axios from 'axios';
import Button from '../Components/button';
import Card from '../Components/card';
import { connect } from 'react-redux';
import { Get_Records, Sort_name } from '../store/store'
import { useDispatch } from 'react-redux'
const App = (props: { records: [], navigation: { push: Function } }) => {
    const dispatcher = useDispatch();
    React.useEffect(() => {
        dispatcher({ type: "CLEAR" });
        dispatcher(Get_Records)
    }, [])
    const sort_by_name = () => {
        console.log("ajay" > "vijay");
        dispatcher(Sort_name)
        // console.log(props.records.name.sort());
    }
    return (
        <View style={styles.container}>
            {/* <ScrollView horizontal={true} style={{ paddingBottom: 10 }}>
                <View style={styles.filter}>
                    <Button text="Order By Name" style={{ marginRight: 5 }} onPress={sort_by_name} />
                </View>
            </ScrollView> */}
            {/* <FlatList renderItem={renderFunction} data={props.records.name} /> */}
            <ScrollView>
                {props.records.map((res, key) => {
                    // console.log(res);
                    return (
                        <TouchableOpacity style={[styles.card, { marginBottom: 10 }]} key={key} onPress={() => props.navigation.push("Detail", res)}>
                            <Text style={styles.text}>{res.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        records: state.records,
    }
}
export default connect(mapStateToProps, null)(App)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 10
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10
    },
    card: {
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
