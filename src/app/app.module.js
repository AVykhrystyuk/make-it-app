'use strict';

import angular from 'angular';

import routes from './app.routes.js';
import {
    AppComponent
} from './app.component.js';
import CommonModule from './common';
import ComponentsModule from './components';

let components = [AppComponent];
let registrations = [routes];

const ngModule = angular.module('makeItApp', [
    CommonModule,
    ComponentsModule
])

components.forEach(c => ngModule.component(c.__selector__, c));
registrations.forEach(r => r(ngModule));