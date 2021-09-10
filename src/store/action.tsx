export const ADD_RECORDS = "ADD_NAME"
export const SAVE_RECORDS = "SAVE_RECORDS";
export const SAVE_SPECIES = "SAVE_SPECIES"
export const SAVE_MOVIES = "SAVE_MOVIES"
export const SAVE_SPACESHIP = "SAVE_SPACESHIP"
export const add_records = (payload: { name: string, species: string, movies: string, Spaceships: string }) => {
    return {
        type: ADD_RECORDS,
        payload
    }
}
export const save_movies = (payload: any) => {
    return {
        type: SAVE_MOVIES,
        payload
    }
}
export const save_species = (payload: any) => {
    return {
        type: SAVE_SPECIES,
        payload
    }
}
export const save_spaceship = (payload: any) => {
    return {
        type: SAVE_SPACESHIP,
        payload
    }
}