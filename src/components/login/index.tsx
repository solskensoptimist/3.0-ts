import React from 'react';
import {request} from 'helpers/request_helper';

class LoginComponent extends React.Component {
    constructor(props: any) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        request({
            data: {
                email: 'peter.persson@bilvision.se',
                password: 'ninja',
            },
            method: 'post',
            url: 'login',
        })
        .then((data) => {
            console.log('userObject:', data);
        });
    }

    render() {
        return (
            <div>
                <div onClick={this.handleSubmit}>
                    Klicka här för att logga in.
                </div>
            </div>
        );
    }
};

export {LoginComponent};
