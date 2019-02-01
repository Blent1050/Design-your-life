//React imports
import React from 'react';
import ReactDOM from 'react-dom';

//Redux Imports
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers';
//Custom file imports
import './index.css';
import App from './App.jsx';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
