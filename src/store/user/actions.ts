export enum actionTypes {
    USER_LOGIN = 'USER_LOGIN',
}

interface UserLogin {
    email: string,
    password: string,
}

interface ActionUserLogin {
    type: 'USER_LOGIN',
    payload: UserLogin,
}

export type Actions =  ActionUserLogin
