// import {createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';


const store = configureStore({
    reducer: {counterSliceKey: counterReducer, authSliceKey: authReducer}
});

export default store;