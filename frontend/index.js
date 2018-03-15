import React from 'react'
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';

//import reducers
import rootReducer from './src/reducers/index'

//create store
const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(
        thunk,
    )
)

const AppWithStore = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('frontend', () => AppWithStore);
