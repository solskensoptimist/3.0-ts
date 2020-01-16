import {Actions, groupsActionTypes} from './actions';

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
        case groupsActionTypes.GET_GROUPS: {
            console.log('action.payload:', action.payload);
            return state // Uppdatera grupper här... (hur gör för olika grupper?)
        }
        default: {
            return state;
        }
    }
};
