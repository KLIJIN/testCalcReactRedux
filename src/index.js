import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, applyMiddleware} from "redux" //функция с помощью которой создаем стор
import rootReducer from "./redux/rootReducer.js"
import {Provider} from "react-redux"
//import counter1 from "./redux/reducers/counter1"

import { composeWithDevTools } from 'redux-devtools-extension';



const loggerMiddleware = store => next => action => {
    const result = next(action)
        console.log("index.js_Middleware", result, store.getState())
        return result
    }      


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(loggerMiddleware)))


const app = (
    <Provider store={store}>
        <App />
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();



