import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/reducer';
import thunk from 'redux-thunk'

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;