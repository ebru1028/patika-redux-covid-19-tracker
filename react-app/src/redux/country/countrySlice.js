import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const adapter = createEntityAdapter();

export const countrySelectors = adapter.getSelectors(
  (state) => state.countrySliceContext
);

export const getAllCountries = createAsyncThunk("", async () => {
  const res = await axios("https://covid19.mathdro.id/api/countries");
  return res.data.countries;
});

const countrySlice = createSlice({
  name: "country",
  initialState: adapter.getInitialState(),
  reducers: {},

  extraReducers: {
    [getAllCountries.fulfilled]: (state, action) => {
      var items = [];

      for (let i = 0; i < action.payload.length; i++) {
        var payloadItem = action.payload[i];
        items.push({
          id: i,
          name: payloadItem.name,
          iso2: payloadItem.iso2,
          iso3: payloadItem.iso3,
        });
      }

      adapter.addMany(state, items);
    },
  },
});

export default countrySlice.reducer;
