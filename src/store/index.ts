import {applyMiddleware, createStore, combineReducers, Store} from 'redux';
import {groupsReducer, GroupsState} from 'store/groups/reducer';
import {userReducer, UserState} from 'store/user/reducer';
import {routerReducer, routerMiddleware} from 'react-router-redux'
import {history} from 'router/history';

// App state.
export interface AppState {
    groups: GroupsState,
    user: UserState,
}

const navigationMiddleware = routerMiddleware(history);

// All reducers combined.
const reducer = combineReducers({
    groups: groupsReducer,
    user: userReducer,
    routing: routerReducer,
});

// Creating redux store.
const store: Store<AppState> = createStore(reducer, applyMiddleware(navigationMiddleware));

// Subscription.
store.subscribe(() => {
    return console.log("Store", store.getState());
});

export {store};
