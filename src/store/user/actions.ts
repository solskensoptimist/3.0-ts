export enum userActionTypes {
    USER_LOGIN = 'USER_LOGIN',
}

interface ActionUserLogin {
    type: 'USER_LOGIN',
    payload: {
        email: string,
        password: string,
    },
}

export type Actions =  ActionUserLogin
