import React from 'react';
import store from 'store';
import userConstants from 'store/user/constants';

const LoginComponent = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        store.dispatch({type: userConstants.USER_LOGIN, payload: {
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
