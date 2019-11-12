import {createStore, combineReducers} from 'redux';
import groupsReducer from 'store/groups/';
import settingsReducer from 'store/settings/';
import userReducer from 'store/user/';

// All reducers combined.
const reducer = combineReducers({
    groups: groupsReducer,
    settings: settingsReducer,
    user: userReducer,
});

// Creating redux store.
const store = createStore(reducer);

// Subscription.
store.subscribe(() => {
    return console.log("Store", store.getState());
});

export default store;
