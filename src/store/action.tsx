export const GET_CATEGORIES = "GET_CATEGORIES"
export const GET_SELECTED_CATEGORIES = "GET_SELECTED_CATEGORIES"
export const SET_CHILDREN_NAME = "SET_CHILDREN_NAME"
export const SET_SELECTED_CATEGORIES_NAME = "SET_SELECTED_CATEGORIES_NAME"
export const get_categories = (payload) => {
    return {
        type: GET_CATEGORIES,
        payload
    }
}
export const get_selected_categories = (payload) => {
    return {
        type: GET_SELECTED_CATEGORIES,
        payload
    }
}
export const set_selected_categories_name = (payload) => {
    return {
        type: SET_SELECTED_CATEGORIES_NAME,
        payload
    }
}

