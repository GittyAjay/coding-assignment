import React from 'react';
import { GET_CATEGORIES, GET_SELECTED_CATEGORIES, get_selected_categories, get_categories, SET_SELECTED_CATEGORIES_NAME } from './action';
import data from "../Assets/data.json"
const init = {
    categories: [],
    selected_categories: [],
    selected_categories_name: "Electronics"
}
export default function store(state = init, action: any) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case GET_SELECTED_CATEGORIES:
            return {
                ...state,
                selected_categories: action.payload
            }
        case SET_SELECTED_CATEGORIES_NAME:
            return {
                ...state,
                selected_categories_name: action.payload
            }
        case "CLEAR":
            return {
                ...state,
                categories: []
            }
        default:
            return state;
    }
}
export const Get_Categories = async (dispatch: Function, getState: any) => {
    if (data) {
        data.map(res => {
            const { name } = res;
            dispatch(get_categories(name));
        })
    }
}
export const Get_selected_Categories = async (dispatch: Function, getState: any) => {
    if (data) {
        console.log(getState().selected_categories_name);
        data.map(res => {
            if (res.name == getState().selected_categories_name) {
                dispatch(get_selected_categories(res.children_data));
            }
        })
    }
}



