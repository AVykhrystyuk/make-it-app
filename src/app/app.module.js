'use strict';

import angular from 'angular';
import routes from './app.routes.js';
import appComponent from './app.component.js';

import components from './components';

let registrations = [
    routes,
    appComponent,
    components
];

const app = angular.module('makeItApp', []);
registrations.forEach(r => r(app));