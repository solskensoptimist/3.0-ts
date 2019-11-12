import store from 'store';
import groupsConstants from 'src/store/groups/constants/constants';
import request from 'helpers/request_helper';

/**
 * Add a new group.
 * @param state
 * @param payload
 */
const addGroup = (state, payload) => {

};

/**
 * Edit a group.
 * @param state
 * @param payload
 * @param payload
 */
const editGroup = (state, payload) => {
    // såhär ska payload se ut {
    // _id: payload.groupId,
    // data: payload.data,
    // method: 'put',
    // url: 'settings/groups'
    // };
    request(payload)
    .then((res) => {
        console.log("res data", res.data);
    })
    .catch((err) => {
        console.error('Error when editing group: ', err);
    });
};

/**
 * Get groups of a certain type.
 * @param payload
 */
const getGroups = (payload) => {
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
const _fetchGroups = (payload) => {
    payload.method = 'get';
    payload.url = 'settings/groups';
    request(payload)
    .then((res) => {
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
const groupsReducer = (state=[], action) => {
    switch(action.type) {
        case groupsConstants.GROUPS_ADD_GROUP: {
            addGroup(state, action.payload);
            return state;
        }
        case groupsConstants.GROUPS_EDIT_GROUP: {
            editGroup(state, action.payload);
            return state;
        }
        case groupsConstants.GROUPS_GET_GROUPS: {
            getGroups(action.payload);
            return state;
        }
        default: {
            return state;
        }
    }
};

export default groupsReducer;
