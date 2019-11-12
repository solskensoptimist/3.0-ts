import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {LoginComponent} from 'components/login/';
import {ProspectComponent} from 'components/prospect/';
import {SettingsComponent} from 'components/settings/';

/**
 * Defining routes. Adding a component to a specific route.
 * @constructor
 */
export const Router = () => {
    // Hämta user store state, returnera olika routes beroende på inloggad eller ej.
    return (
        <Switch>
            <Route exact path="/prospektera" component={ProspectComponent} />
            <Route exact path="/inloggning" component={LoginComponent} />
            <Route exact path="/installningar" component={SettingsComponent} />
        </Switch>
    );
};
