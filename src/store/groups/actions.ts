export enum actionTypes {
    GET_GROUPS = 'GET_GROUPS',
    REMOVE_GROUP = 'REMOVE_GROUP',
}

interface ActionGetGroups {
    type: 'GET_GROUPS',
    payload: string,
}

interface ActionRemoveGroup {
    type: 'REMOVE_GROUP',
    payload: string,
}

export type Actions =   ActionGetGroups |
                        ActionRemoveGroup
