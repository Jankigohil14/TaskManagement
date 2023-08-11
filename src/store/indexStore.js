import {configureStore} from '@reduxjs/toolkit';
import UI_Slice from './UISlice';

const store = configureStore({
    reducer: {
        ui: UI_Slice.reducer,
    },
});

export default store;
