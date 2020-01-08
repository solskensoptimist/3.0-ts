import {actionTypes} from './actions';

export interface UserState {
    data: object,
    colleagues: Array<object>,
    connections: Array<object>
}

const initialState: UserState = {
    data: {},
    colleagues: [],
    connections: [],
};

interface ActionUserLogin {
    type: 'USER_LOGIN',
    payload: object,
}

type Actions =  ActionUserLogin

export const userReducer = (state = initialState, action: Actions) => {
    switch(action.type) {
        case actionTypes.USER_LOGIN: {
            return {}
        }
        default: {
            return state;
        }
    }
};
