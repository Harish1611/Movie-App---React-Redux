import { createSlice } from "@reduxjs/toolkit";


// Creating of Initial State

const initialState =  {
    movies:{},
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

// function which returns movies from store

export const getAllMovies = (state) => state.movies.movies;

export default movieSlice.reducer;