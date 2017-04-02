'use strict';

import angular from 'angular';
import ngAnimate from 'angular-animate';

import Registrater from 'registrater';
import {
    AppComponent
} from './app.component.js';
import LayoutModule from './layout/module.js';
import ComponentsModule from './components/module.js';

const ngModule = angular.module('makeItApp', [
    ngAnimate,
    LayoutModule,
    ComponentsModule
]);

new Registrater(ngModule).registerComponents([AppComponent]);