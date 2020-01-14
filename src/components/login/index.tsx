import React from 'react';
import {store} from 'store';

export const LoginComponent = () => {
    const handleSubmit = () => {
        // store.dispatch(userActions.userLogin({
        //     email: 'peter.persson@bilvision.se',
        //     password: 'ninja',
        // }));
    };

    return (
        <div>
            <div onClick={handleSubmit}>
                Klicka här för att logga in.
            </div>
        </div>
    );
};
