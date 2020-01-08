import { action } from 'typesafe-actions';

export enum actionTypes {
    GET_GROUPS = 'GET_GROUPS',
    REMOVE_GROUP = 'REMOVE_GROUP',
}

export const groupsActions = {
    getGroups: (type: string) => action(actionTypes.GET_GROUPS, type),
    removeGroup: (id: string) => action(actionTypes.REMOVE_GROUP, id),
};
