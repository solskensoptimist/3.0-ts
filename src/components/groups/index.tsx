import React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppState} from 'store';
import {groupsActionTypes} from 'store/groups/actions';
import {GroupsState} from 'store/groups/reducer';
import {GroupsSubComponent} from './subcomponents/groups_sub_component';

type Props = {
    getGroups: Function,
};

class GroupsComponent extends React.Component<Props, GroupsState> {
    constructor(props: any) {
        super(props);

        this.getGroups = this.getGroups.bind(this);
    }

    // SKa byggas om obv... när ska vi hämta grupper? componentDidUpdate, eller när en användare loggar in?
    getGroups() {
        this.props.getGroups('dealer');
    }

    render() {
        return (
            <div onClick={this.getGroups}>
                <div>
                Groups huvud-komponent
                </div>
                <GroupsSubComponent />
            </div>
        );
    }
}

const MapStateToProps = (state: AppState) => {
    return {
        dealer: state.groups.dealer,
        region: state.groups.region,
    };
};

const MapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getGroups: (type: string) => { dispatch({ type: groupsActionTypes.GET_GROUPS, payload: type }) },
    };

};

export default connect(
    MapStateToProps,
    MapDispatchToProps
)(GroupsComponent);
