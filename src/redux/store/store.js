import { createStore, combineReducers, applyMiddleware } from 'redux';
import bookReducers from '../reducers/bookReducers'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const combineReducer = combineReducers({
    books: bookReducers,
})

export const store = createStore(
    combineReducer,
    // applyMiddleware(logger),
    composeWithDevTools(
    )
)