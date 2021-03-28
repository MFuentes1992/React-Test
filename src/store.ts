import {createStore, applyMiddleware} from 'redux';
import {tReducer} from './tReducer';
import thunk from 'redux-thunk';

export const store = createStore(tReducer, applyMiddleware(thunk));