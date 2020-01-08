import { action } from 'typesafe-actions';

export enum actionTypes {
    USER_LOGIN = 'USER_LOGIN',
}

interface Credentials {
    email: string,
    password: string,
}

interface Request {
    data: Credentials,
    method: "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH",
    url: string,
}

export const userActions = {
    userLogin: (payload: Request) => action(actionTypes.USER_LOGIN, payload),
};
