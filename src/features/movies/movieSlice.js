import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: {},
    searchText: 'harry',
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, {payload}) =>{
            console.log('state',state.movies);
            state.movies = payload;
        },
        sText: (state, {payload}) =>{
            state.searchText = payload;
        },
    },
});
export const {addMovies} = movieSlice.actions;
export const {sText} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getMovieName = (state) => state.movies.searchText;
export default movieSlice.reducer;