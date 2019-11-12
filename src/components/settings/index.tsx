import React from 'react';
import store from 'store';
import groupsActionTypes from 'store/groups/action_types';
import SettingsSubComponent from './components/settings_sub_component';

class SettingsComponent extends React.Component {
    componentDidMount() {
        store.dispatch({type: groupsActionTypes.GROUPS_GET_GROUPS, payload: {
            data: {
                type: 'region'
            }
        }});
    }

    render() {
        return (
            <div>
                <div>
                Inställningar huvud-komponent
                </div>
                <SettingsSubComponent />
            </div>
        );
    }
}

export default SettingsComponent;
