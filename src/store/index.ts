import {createStore, combineReducers, Store} from 'redux';
import {groupsReducer, GroupsState} from 'store/groups/reducer';
import {userReducer, UserState} from 'store/user/reducer';

// App state.
export interface AppState {
    groups: GroupsState,
    user: UserState,
}

// All reducers combined.
const reducer = combineReducers({
    groups: groupsReducer,
    user: userReducer,
});

// Creating redux store.
const store: Store<AppState> = createStore(reducer);

// Subscription.
store.subscribe(() => {
    return console.log("Store", store.getState());
});

export {store};
