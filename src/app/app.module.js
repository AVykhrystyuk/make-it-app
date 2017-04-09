'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import toastr from 'angular-toastr';
import ngFontawesome from 'ngFontAwesome';

import {
    Router,
    AnimateProvider
} from './config';

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
        toastr,
        uiRouter,
        ngFontawesome,

        CommonModule,
        ComponentsModule,
        DirectivesModule
    ])
    .config(Router.configure)
    .config(AnimateProvider.configure);

new Registrater(appModule)
    .registerComponents([AppComponent])
    .registerFactories([$exceptionHandlerFactory]);