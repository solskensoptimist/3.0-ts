import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {LoginComponent} from 'components/login/';
import {ProspectComponent} from 'components/prospect/';
import GroupsComponent from 'components/groups/';

/**
 * Defining routes. Adding a component to a specific route.
 * @constructor
 */
export const Router = () => {
    // Hämta user_old store state, returnera olika routes beroende på inloggad eller ej.
    return (
        <Switch>
            <Route exact path="/prospektera" component={ProspectComponent} />
            <Route exact path="/inloggning" component={LoginComponent} />
            <Route exact path="/grupper" component={GroupsComponent} />
        </Switch>
    );
};
