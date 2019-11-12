import React from 'react';
import Router from './router/';
import Navigation from './components/navigation';

/**
 * Root component which holds all other components.
 */
const AppHolder = () => {
    return (
        <div>
            <Navigation />
            <div className='page-holder'>
                <Router />
            </div>
        </div>
    );
};

export default AppHolder;
