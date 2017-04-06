'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import configure from './config';

import Registrater from 'registrater';
import {
    $exceptionHandlerFactory
} from 'utils'
import {
    AppComponent
} from './app.component.js';

import CommonModule from './common/module.js';
import ComponentsModule from './components/module.js';
import DirectivesModule from './directives/module.js';

const appModule = angular.module('makeItApp', [
    ngAnimate,
    uiRouter,
    CommonModule,
    ComponentsModule,
    DirectivesModule
]);

configure(appModule);

new Registrater(appModule)
    .registerComponents([AppComponent])
    .registerFactories([$exceptionHandlerFactory]);

appModule.run(($rootScope, $transitions, $state) => {
    'ngInject';

    // $state.defaultErrorHandler(function(err1, err2, err3) {
    //     console.log('defaultErrorHandler', err1, err2, err3);
    // });

    // $transitions.onError({}, function(transition) {
    //     console.log('Transition erred!', transition.error());
    // });
});