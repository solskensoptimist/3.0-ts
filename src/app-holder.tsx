import React from 'react';
import {Router} from './router/';
import {Navigation} from 'components/navigation';

/**
 * Root component which holds all other subcomponents.
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
