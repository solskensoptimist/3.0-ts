import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/main.css';
import {store} from 'store';
import {Provider} from 'react-redux';
import {AppHolder} from './app-holder';
import {ConnectedRouter} from 'react-router-redux';
// import {Router} from 'react-router-dom';
import {history} from 'router/history';

// Lägg till google analytics här?
// history.listen(location => analyticsService.track(location.pathname))

/**
 * Application starting point.
 * Wrapping AppHolder in router to control url paths.
 */
const app =
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppHolder />
        </ConnectedRouter>
    </Provider>;

ReactDOM.render(app, document.querySelector('#root'));
