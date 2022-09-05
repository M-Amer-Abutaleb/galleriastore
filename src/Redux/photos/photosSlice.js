import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const mainURL = 'https://api.unsplash.com/photos/';
const searchURL = 'https://api.unsplash.com/search/photos/';
const ClientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

const initialState = {
  data: [],
  page: 1,
  isLoading: false,
  query: ""
}

export const getPhotos = createAsyncThunk("photos/getPhotos", async (args = {query : "", page : 1}) => {
  let urlPage = `&page=${args.page}`;
  let urlQuery = `&query=${args.query}`;
  if (initialState.query > 2) {
    const res = await fetch(searchURL + ClientID + urlPage + urlQuery);
    const data = await res.json();
    return data
  } else {
    const res = await fetch(mainURL + ClientID + urlPage);
    const data = await res.json();
    return data;
  }
});

const photoSlice = createSlice({
	name: 'photos',
	initialState,
	reducers: {
		updatePhotos: (state, action) => {
			return { ...state };
		},
    updateQuery: (state, action) => {
      return state.query = action.payload
    }
	},
	extraReducers: {
		[getPhotos.pending]: (state) => {
			state.isLoading = true;
		},
		[getPhotos.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[getPhotos.pending]: (state) => {
			state.isLoading = false;
		},
	},
});

export const { updatePhotos, updateQuery } = photoSlice.actions;

export default photoSlice.reducer