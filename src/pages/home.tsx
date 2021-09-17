import React from 'react'
import { StyleSheet, ScrollView, View, FlatList, Text, TouchableOpacity, Image } from 'react-native'
import Search from '../Components/search';
import Card from '../Components/card';
import Prod_card from '../Components/prod_card';
import { connect } from 'react-redux';
import { Get_Categories, Get_selected_Categories } from '../store/store'
import { set_selected_categories_name } from '../store/action'
import { useDispatch } from 'react-redux'
import Aicon from 'react-native-vector-icons/AntDesign';
import Data from '../Assets/data.json';
const App = (props: { categories: [], selected_categories: [], set_selected_categories_name: Function, selected_categories_name: String, navigation: { push: Function } }) => {
    const dispatcher = useDispatch();
    const [isOpen, setOpen] = React.useState(false);
    const [clicked_item, setclicked_item] = React.useState(null);
    const [clicked_item_content, set_clicked_item_content] = React.useState(null);
    React.useEffect(() => {
        dispatcher({ type: "CLEAR" });
        dispatcher(Get_Categories)
        dispatcher(Get_selected_Categories)
    }, [clicked_item])
    const renderFunction = (res) => {
        return (
            <View style={[styles.categories]}>
                <Card name={res.item} onPress={() => { setclicked_item(res.item); props.set_selected_categories_name(res.item); }} clicked_name={clicked_item ? clicked_item : null}>
                    <Image source={{ uri: 'https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg' }} style={{ width: 100, height: 100 }} resizeMode={"contain"} />
                </Card>
            </View>
        )
    }
    const body_render_function = (res) => {
        return (
            <View style={styles.body}>
                <Text style={styles.bold__Text}>{props.selected_categories_name}</Text>
                <View style={styles.carosel}>
                </View>
                {props.selected_categories.map((res, id) => {
                    return (
                        <View style={{ flexDirection: 'column', paddingVertical: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>{res.name}</Text>
                                <TouchableOpacity onPress={() => { setOpen(res => !res); set_clicked_item_content(response => response == res.name ? null : res.name) }}>
                                    {clicked_item_content == res.name && <Aicon name="up" size={25} color="grey" />}
                                    {clicked_item_content != res.name && <Aicon name="down" size={25} color="grey" />}
                                </TouchableOpacity>
                            </View>
                            {clicked_item_content == res.name && <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {res.children_data && res.children_data.map((res, id) => {
                                    return (
                                        <Prod_card name={res.name} key={res.id} style={{ margin: 2 }}>
                                            <Image source={{ uri: 'https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg' }} style={{ width: 100, height: 100 }} resizeMode={"contain"} />
                                        </Prod_card>
                                    )
                                })}
                            </View>}
                            {clicked_item_content != res.name && <View style={{ height: 1, backgroundColor: 'grey' }}></View>}

                        </View>
                    )
                })}

            </View>
        )
    }
    return (
        <>
            <Search style={{ margin: 10 }} />
            <View style={{ flexDirection: 'row', flex: 1, backgroundColor: 'white' }}>
                <View>
                    <FlatList renderItem={renderFunction} data={props.categories} />
                </View>
                <FlatList renderItem={body_render_function} data={[""]} />
            </View>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        selected_categories: state.selected_categories,
        selected_categories_name: state.selected_categories_name
    }
}
const mapDispatchToProps = {
    set_selected_categories_name
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 10,
        marginVertical: 10
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    categories: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginVertical: 2,
    },
    bold__Text: {
        fontWeight: 'bold',
        fontSize: 20
    },
    carosel: {
        height: 100,
        backgroundColor: 'red',
        borderRadius: 5
    }
})
