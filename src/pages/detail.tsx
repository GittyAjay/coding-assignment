import axios from 'axios';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const detail = (props: { route: { params: object } }) => {
    const [Spaceships, setSpaceships] = React.useState<Array<string>>([]);
    const [movies, setmovies] = React.useState<Array<string>>([]);
    const [species, setspecies] = React.useState<Array<string>>([]);
    const [] = React.useState();

    React.useEffect(() => {
        // console.log(props.route.params);
        props.route.params.Spaceships.map(res => {
            axios.get(`${res}?format=json`).then(res => {
                const { name } = res.data;
                setSpaceships(prev_name => [...prev_name, name]);
            })
        })
        props.route.params.movies.map(async res => {
            // console.log(res);
            await axios.get(`${res}?format=json`).then(res => {
                const { episode_id } = res.data
                setmovies(prev_name => [...prev_name, episode_id]);
            })
        })
        props.route.params.species.map(async res => {
            console.log(res);
            await axios.get(`${res}?format=json`).then(res => {
                const { name } = res.data;
                // console.log(name);
                if (name) {
                    // console.log(name);
                    setspecies(prev_name => [...prev_name, name]);
                }
            })
        })
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.heaadFont}>NAME</Text>
            <Text style={styles.fontNormal}>{props.route.params.name}</Text>
            <Text style={styles.heaadFont}>SPACESHIP</Text>
            <View style={{ flexDirection: 'row' }}>
                {Spaceships.map(res => {
                    return (
                        <Text style={styles.fontNormal}>{res}</Text>
                    )
                })}
            </View>
            <Text style={styles.heaadFont}>EPISODE</Text>
            <View style={{ flexDirection: 'row' }}>
                {movies.map(res => {
                    return (
                        <Text style={styles.fontNormal}>{res}</Text>
                    )
                })}
            </View>
            {/* <View style={{ flexDirection: 'column', backgroundColor: 'red' }}>
                {species.map(res => {
                    return (
                        <Text>{res}</Text>
                    )
                })}
            </View> */}
            {/* <Text>{props.route.params.Spaceships}</Text>
            <Text>{props.route.params.movies}</Text>
            <Text>{props.route.params.species}</Text> */}
        </View>
    )
}

export default detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    heaadFont: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    fontNormal: {
        fontSize: 18,
    }
})
