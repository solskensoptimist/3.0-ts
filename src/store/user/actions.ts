export enum actionTypes {
    USER_LOGIN,
}

export const userLogin = (payload) => {
    return {type: USER_LOGIN, payload};
};
