import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger} from 'redux-logger';
import reducer from './reducer';
import {addComment} from './actions';
import DevTools from './DevTools';

const logger = createLogger();
const store = createStore(
    reducer,
    DevTools.instrument()
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komenttarz'));
