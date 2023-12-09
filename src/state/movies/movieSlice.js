import { createSlice } from "@reduxjs/toolkit";


// Creating of Initial State

const initialState =  {
    movies:[]
}


// Creation of Movie Slice

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        addMovies:(state, {payload}) => {
            state.movies = payload 
        }
    },
})

export const {addMovies} = movieSlice.actions;
export default movieSlice.reducer;