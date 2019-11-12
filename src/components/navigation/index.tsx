import React from 'react';
import {NavLink} from 'react-router-dom';

/**
 * Navigation component.
 */
export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/inloggning'>Logga in</NavLink>
                    <NavLink to='/prospektera'>Prospektera</NavLink>
                    <NavLink to='/installningar'>Inställningar</NavLink>
                </li>
            </ul>
        </nav>
    );
};
