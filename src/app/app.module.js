'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import Registrater from 'registrater';
import Router from './router';
import {
    AppComponent
} from './app.component.js';
import LayoutModule from './layout/module.js';
import ComponentsModule from './components/module.js';

const ngModule = angular.module('makeItApp', [
    ngAnimate,
    uiRouter,      
    LayoutModule,
    ComponentsModule
]).config(($stateProvider, $urlRouterProvider) => {
    new Router($stateProvider, $urlRouterProvider).registerRoutes();
});

new Registrater(ngModule).registerComponents([AppComponent]);