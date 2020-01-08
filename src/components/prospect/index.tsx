import React from 'react';
import {ProspectSubComponent} from './subcomponents/prospect_sub_component';

export const ProspectComponent = () => {
    return (
        <div>
            <div>
                Prospektera huvud-komponent
            </div>
            <ProspectSubComponent />
        </div>
    );
};
