import React from 'react';
import store from 'store';
import {getGroups} from 'store/groups/actions';
import {SettingsSubComponent} from './components/settings_sub_component';

export class SettingsComponent extends React.Component {
    componentDidMount() {
        store.dispatch(getGroups({
            data: {
                type: 'region'
            }
        }));
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
