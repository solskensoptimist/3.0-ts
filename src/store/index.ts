import {createStore, combineReducers, Store} from 'redux';
import {AppState} from 'store/app_state';
import {groupsReducer} from 'store/groups/reducer';
import {userReducer} from 'store/user/reducer';
import {User} from './models/user';

// App state.
interface AppState {
    user: User,
}

// All reducers combined.
const reducer = combineReducers({
    groups: groupsReducer,
    settings: settingsReducer,
    user: userReducer,
});

// Creating redux store.
const store: Store<AppState> = createStore(reducer);

// Subscription.
store.subscribe(() => {
    return console.log("Store", store.getState());
});

export {store};
