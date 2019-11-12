import userActionTypes from 'store/user/action_types';
import request from 'helpers/request_helper';

interface Action {
    type: string,
    payload: Request,
}

interface Request {
    data: object,
    method: "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH",
    url: string,
}


/**
 *
 * @param state
 * @param payload
 */
const userLogin = (state: Array, payload: Request) => {
    payload.url = 'login';
    payload.method = 'post';
    request(payload)
    .then((res) => {
        console.log('res', res.data);
        // Sätt user objekt i store data?
    })
    .catch((err) => {
        console.error('Error when logging in: ', err);
    });
};

/**
 * Reducer for settings.
 * @param state
 * @param action
 * @returns {*}
 */
const userReducer = (state=[], action: Action) => {
    switch(action.type) {
        case userActionTypes.USER_LOGIN: {
            userLogin(state, action.payload);
            return state;
        }
        default: {
            return state;
        }
    }
};

export default userReducer;
