import {createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { LOAD_SUCCESS, LOAD_FAILED } from './actions';

function rootReducer(state = [] , action) {
    switch (action.type) {
        case LOAD_SUCCESS:
            
            return action.payload;

        case LOAD_FAILED:
            return action.error;

        default:
            return state;
    }
}

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));