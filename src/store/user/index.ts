import userConstants from 'store/user/constants';
import request from 'helpers/request_helper';

/**
 *
 * @param state
 * @param payload
 */
const userLogin = (state, payload) => {
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
const userReducer = (state=[], action) => {
    switch(action.type) {
        case userConstants.USER_LOGIN: {
            userLogin(state, action.payload)
            return state;
        }
        default: {
            return state;
        }
    }
};

export default userReducer;
