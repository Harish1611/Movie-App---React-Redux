import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../config/movieApi";

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

// fetch data from OMDB using async thunk & axios
export const fetchAsyncMovies = createAsyncThunk ('movies/fetchAsyncMovies', async () =>{

    const movieText = "Harry";
    const response = await movieApi.get(`?apiKey=${OMDB_API_KEY}&s=${movieText}&type=movie`);
    
    console.log("Response from API:", response);

    return response.data

});


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
    extraReducers:(builder) => {
        builder
          .addCase(fetchAsyncMovies.pending, () => {
            console.log("Pending");
          })
          .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
            console.log("Fetched Successfully");
            return { ...state, movies: payload };
          })
          .addCase(fetchAsyncMovies.rejected, () => {
            console.log("Rejected");
          });
      },
    
})

export const {addMovies} = movieSlice.actions;

// function which returns movies from store

export const getAllMovies = (state) => state.movies.movies;

export default movieSlice.reducer;