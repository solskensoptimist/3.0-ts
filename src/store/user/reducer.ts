import {Actions, actionTypes} from './actions';

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
        case actionTypes.USER_LOGIN: {
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
};
