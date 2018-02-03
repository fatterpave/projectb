import {observable} from 'mobx';
import React from 'react';

export default class AppStore {
    
    projectUrl = "https://raw.githubusercontent.com/fatterpave/projectb/master/data/projects.json";

    @observable projects = [];
}