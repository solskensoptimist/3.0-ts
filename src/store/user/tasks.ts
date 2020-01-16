import {store} from 'store';
import {request} from 'helpers/request_helper';
import {userActionTypes} from "store/user/actions";

interface Credentials {
    email: string,
    password: string,
}

/**
 * Send login request, set user data to store state.
 * @param credentials
 */
export const userLogin = async (credentials: Credentials) => {
    return new Promise((resolve, reject) => {
        request({
            data: credentials,
            method: 'post',
            url: 'login',
        })
        .then((data) => {
            resolve(store.dispatch({ type: userActionTypes.USER_LOGIN, payload: data }));
        });
    });
};
