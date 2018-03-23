import React from 'react'
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';

//import reducers
import rootReducer from './src/reducers/index'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

//create store
const store = createStore(
    persistedReducer,
    undefined,
    applyMiddleware(
        thunk,
    )
)

//create persistor
const persistor = persistStore(store)

const AppWithStore = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent('frontend', () => AppWithStore);
