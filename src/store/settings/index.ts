
/**
 * Reducer for settings.
 * @param state
 * @param action
 * @returns {*}
 */
const settingsReducer = (state=[], action) => {
    switch(action.type) {
        // case "ADD": {
        //     return add(initialState, action.payload);
        // }
        default: {
            return state;
        }
    }
};

export default settingsReducer;
