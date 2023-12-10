import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../config/movieApi";

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

// fetch data from OMDB Movie Data using async thunk & axios
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${OMDB_API_KEY}&s=${movieText}&type=movie`
    );

    console.log("Response from API:", response);

    return response.data;
  }
);

// fetch data from OMDB show Data using async thunk & axios
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${OMDB_API_KEY}&s=${seriesText}&type=series`
    );

    console.log("Response from API:", response);

    return response.data;
  }
);

// fetch data of Movie or Show for Details page using async thunk & axios
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(
      `?apiKey=${OMDB_API_KEY}&i=${id}&Plot=full`
    );

    console.log("Response from API:", response);

    return response.data;
  }
);

// Creating of Initial State

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

// Creation of Movie Slice

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
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
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully");
        return { ...state, shows: payload };
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully");
        return { ...state, selectedMovieOrShow: payload };
      });
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;

// function which returns movies from store

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowDetails = (state) =>
  state.movies.selectedMovieOrShow;

export default movieSlice.reducer;
