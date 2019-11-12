import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/main.css';
import {store} from 'store';
import {Provider} from 'react-redux';
import {AppHolder) from './app-holder';
import {BrowserRouter} from 'react-router-dom';

/**
 * Application starting point.
 * Wrapping AppHolder in BrowserRouter to control url paths.
 */
const app =
    <Provider store={store}>
        <BrowserRouter>
            <AppHolder />
        </BrowserRouter>
    </Provider>;
ReactDOM.render(app, document.querySelector('#root'));
