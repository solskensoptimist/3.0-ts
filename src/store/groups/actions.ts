export enum actionTypes {
    ADD_GROUP,
    EDIT_GROUP,
    GET_GROUPS,
    REMOVE_GROUP,
    SHARE_GROUP,
}

export const getGroups = (payload) => {
    return {type: GROUPS_GET_GROUPS, payload};
};
