import {
    createStore,
    combineReducers
} from 'redux'
import {
    devToolsEnhancer
} from 'redux-devtools-extension';
import * as reducers from './ducks';

const rootReducer = combineReducers(reducers)

const store = createStore(rootReducer, devToolsEnhancer())

export {
    store
}
