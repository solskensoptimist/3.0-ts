import React from 'react';
import store from 'store';
import userActionTypes from 'store/user/action_types';

const LoginComponent = () => {
    const handleSubmit = () => {
        store.dispatch({type: userActionTypes.USER_LOGIN, payload: {
            data: {
                email: 'peter.persson@bilvision.se',
                password: 'ninja',
            }
        }});
    };

    return (
        <div>
            <div onClick={handleSubmit}>
                Klicka här för att logga in.
            </div>
        </div>
    );
};

export default LoginComponent;
