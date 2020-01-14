import React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppState} from 'store';
import {actionTypes} from 'store/groups/actions';
import {GroupsSubComponent} from './subcomponents/groups_sub_component';

type Props = {
    getGroups: Function,
};

type State = {
    dealer: Array<any>,
    region: Array<any>,
};

class GroupsComponent extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.getGroups = this.getGroups.bind(this);
    }
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
        getGroups: (type: string) => { dispatch({ type: actionTypes.GET_GROUPS, payload: type }) },
    };

};

export default connect(
    MapStateToProps,
    MapDispatchToProps
)(GroupsComponent);
