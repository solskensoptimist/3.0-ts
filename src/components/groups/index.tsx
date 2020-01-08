import React from 'react';
import {store} from 'store';
import {getGroups} from 'store/groups_old/actions';
import {GroupsSubComponent} from './subcomponents/groups_sub_component';

export class GroupsComponent extends React.Component {
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
                Groups huvud-komponent
                </div>
                <GroupsSubComponent />
            </div>
        );
    }
}
