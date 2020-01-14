import {Actions, actionTypes} from './actions';

export interface GroupsState {
    dealer: Array<any>,
    region: Array<any>,
}

const initialState: GroupsState = {
    dealer: [],
    region: [],
};

export const groupsReducer = (state = initialState, action: Actions) => {
    switch(action.type) {
        case actionTypes.GET_GROUPS: {
            console.log('action.payload:', action.payload);
            return {
                ...state,
                dealer: [...state.dealer, action.payload],
                region: [...state.region, action.payload],
            }
        }
        default: {
            return state;
        }
    }
};
