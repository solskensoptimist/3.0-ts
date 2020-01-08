import {actionTypes} from './actions';

export interface GroupsState {
    dealer: Array<object>,
    region: Array<object>,
}

const initialState: GroupsState = {
    dealer: [],
    region: [],
};

interface ActionGetGroups {
    type: 'GET_GROUPS',
    payload: string,
}

interface ActionRemoveGroup {
    type: 'REMOVE_GROUP',
    payload: string,
}

type Actions =  ActionGetGroups |
                ActionRemoveGroup

export const groupsReducer = (state = initialState, action: Actions) => {
    switch(action.type) {
        case actionTypes.GET_GROUPS: {
            return {
                dealer: [...state.dealer, action.payload],
                region: [...state.region, action.payload],
            }
        }
        default: {
            return state;
        }
    }
};
