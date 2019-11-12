import React from 'react';
import Router from './router/';
import {Navigation} from './components/navigation';

/**
 * Root component which holds all other components.
 */
export const AppHolder = () => {
    return (
        <div>
            <Navigation />
            <div className='page-holder'>
                <Router />
            </div>
        </div>
    );
};
