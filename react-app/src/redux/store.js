import { configureStore } from '@reduxjs/toolkit';

import countrySlice from './country/countrySlice';
import covidSlice from './covid/covidSlice';

export const store = configureStore({
    reducer: {
       countrySliceContext: countrySlice,
       covidSliceContext: covidSlice,
    }
});