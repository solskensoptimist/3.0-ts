import {Actions, userActionTypes} from './actions';

export interface UserState {
    data: object,
    colleagues: Array<any>,
    connections: Array<any>
}

const initialState: UserState = {
    data: {},
    colleagues: [],
    connections: [],
};

export const userReducer = (state = initialState, action: Actions) => {
    switch(action.type) {
        case userActionTypes.USER_LOGIN: {
            return {
                ...state,
                data: action.payload
            }
        }
        default: {
            return state;
        }
    }
};
