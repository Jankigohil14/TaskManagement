import {createSlice} from '@reduxjs/toolkit';
const uiInitialState = {
    isLoggedIn: false,
    isSidebarisOpen: false,
};

const UI_Slice = createSlice({
    name: 'ui_slice',
    initialState: uiInitialState,
    reducers: {
        login(state) {
            state.isLoggedIn = true;
            localStorage.setItem('LOGGED_IN', '1');
            // console.log(state.isLoggedIn);
        },
        logout(state) {
            state.isLoggedIn = false;
            localStorage.removeItem('LOGGED_IN');
        },
        showSidebar(state) {
            state.isSidebarisOpen = true;
        },
        hideSidebar(state) {
            state.isSidebarisOpen = false;
        },
    },
});

export const UISliceAction = UI_Slice.actions;
export default UI_Slice;
