import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class Main extends Component {

    constructor(args){
        super(args);
    }

    handleClick = () => {
        this.props.webservices.getProjects();
    };

    render() {
        return (
            <div>
                <FlatButton onClick={this.handleClick} label="Trykk" />
            </div>
        );
    }
}