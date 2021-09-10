import axios from 'axios';
import React from 'react';
import { ADD_RECORDS, add_records } from './action';
const init = {
    records: [
        { name: "", species: "", movies: "", Spaceships: "" }
    ],
}
export default function store(state = init, action: any) {
    switch (action.type) {
        case ADD_RECORDS:
            return {
                ...state,
                records: [...state.records, action.payload]
            }
        case "CLEAR":
            return {
                ...state,
                records: []
            }
        default:
            return state;
    }
}
export const Get_Records = async (dispatch: Function, getState: any) => {
    let count;
    getState().records
    await axios.get('https://swapi.dev/api/people/?format=json').then(async res => {
        count = res.data.count;
        res.data.results.map((val) => {
            dispatch(add_records({
                name: val.name,
                species: val.species,
                movies: val.films,
                Spaceships: val.starships
            }));
        })
    }).catch(err => {
        console.log("ERROR", err);
    })
}

