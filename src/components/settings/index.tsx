import React from 'react';
import store from 'store';
import groupsConstants from 'store/groups/constants';
import SettingsSubComponent from './components/settings_sub_component';

class SettingsComponent extends React.Component {
    componentDidMount() {
        store.dispatch({type: groupsConstants.GROUPS_GET_GROUPS, payload: {
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
