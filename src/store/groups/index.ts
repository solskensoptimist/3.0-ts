import store from 'store';
import groupsActionTypes from 'store/groups/action_types/';
import request from 'helpers/request_helper';

interface Action {
    type: string,
    payload: Request,
}

interface Request {
    data: GroupsData,
    method: "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH",
    url: string,
}

interface GroupsData {
    type?: string,
}


/**
 * Add a new group.
 * @param state
 * @param payload
 */
// const addGroup = (state, payload) => {
//
// };

/**
 * Edit a group.
 * @param state
 * @param payload
 * @param payload
 */
// const editGroup = (state, payload) => {
//     // såhär ska payload se ut {
//     // _id: payload.groupId, <-- detta ska bli en del av data sedan när vi gör request
//     // data: payload.data,
//     // method: 'put',
//     // url: 'settings/groups'
//     // };
//     request(payload)
//     .then((res) => {
//         console.log("res data", res.data);
//     })
//     .catch((err) => {
//         console.error('Error when editing group: ', err);
//     });
// };

/**
 * Get groups of a certain type.
 * @param payload
 */
const getGroups = (payload: Request) => {
    switch (payload.data.type) {
        case 'dealer':
            return _fetchGroups(payload);
        case 'region':
            return _fetchGroups(payload);
        default:
            return [];
    }
};

/**
 * Fetch groups by type.
 * @param payload
 * @private
 */
const _fetchGroups = (payload: Request) => {
    payload.method = 'get';
    payload.url = 'settings/groups';
    request(payload)
    .then((res: any) => {
        console.log("res.data", res.data);
        return res.data;
    })
    .catch((err) => {
        console.error('Error when fetching groups: ', err);
    });
};

/**
 * Reducer for settings.
 * @param state
 * @param action
 * @returns {*}
 */
const groupsReducer = (state=[], action: Action) => {
    switch(action.type) {
        // case groupsConstants.GROUPS_ADD_GROUP: {
        //     addGroup(state, action.payload);
        //     return state;
        // }
        // case groupsConstants.GROUPS_EDIT_GROUP: {
        //     editGroup(state, action.payload);
        //     return state;
        // }
        case groupsActionTypes.GROUPS_GET_GROUPS: {
            getGroups(action.payload);
            return state;
        }
        default: {
            return state;
        }
    }
};

export default groupsReducer;
