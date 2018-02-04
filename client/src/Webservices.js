import React, { Component } from 'react';
import {observer} from 'mobx-react';

@observer
export default class WebServices extends Component {

    constructor(args){
        super(args);
    }

    getProjects = () => {
        fetch(this.props.projectUrl, {
            accept: 'application/json',
        })
        .then(res=>res.json())
        .then(json=>{
            alert(json[0].name);
        })
        .catch(err=>{
            console.error("Error getting user data >>\n",err);
        });
    };

    getContributors = () => {
        fetch('https://raw.githubusercontent.com/fatterpave/projectb/master/data/contributors.json', {
            accept: 'application/json',
        })
        .then(res=>res.json())
        .then(json=>{
            alert(json[0].name);
        })
        .catch(err=>{
            console.error("Error getting user data >>\n",err);
        });
    };

}