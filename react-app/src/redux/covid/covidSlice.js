import { createSlice } from '@reduxjs/toolkit';
import { createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const adapter = createEntityAdapter();

export const getAllCovidData = createAsyncThunk("covidData/fetchCovidData", async (countryName) => {
    if(countryName.length === 0) { 
        const res = await axios("https://covid19.mathdro.id/api")
        return res.data;
    }else{
      const res = await axios(`https://covid19.mathdro.id/api/countries/${countryName}`);
      return res.data;
    }
});

export const getAllCovidDataDaily = createAsyncThunk("covidData/fetchDataDaily", async () => {
    const res = await axios("https://covid19.mathdro.id/api/daily");
    return res.data;
})

const covidSlice = createSlice ({
    name: "covid",
    initialState: adapter.getInitialState(),
    reducers: {
        setCountryName: (state, action) => {
            state.countryName = action.payload;    
        }
    },
    extraReducers: {
        [getAllCovidData.fulfilled]: (state, action) => {
            state.covidData = action.payload;
        },
        [getAllCovidDataDaily.fulfilled] : (state, action) => {
            state.dailyData = action.payload;
        }
    },
})

export const { setCountryName } = covidSlice.actions;
export default covidSlice.reducer;