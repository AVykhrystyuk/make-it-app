'use strict';

import angular from 'angular';
import ngUiBootstrapModule from './angular-ui-bootstrap.module.js';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngFontawesome from 'ngFontAwesome';

import {
    Router,
    AnimateProvider,
    UibTooltipProvider
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
        ngUiBootstrapModule,
        ngAnimate,
        uiRouter,
        ngFontawesome,

        CommonModule,
        ComponentsModule,
        DirectivesModule
    ])
    .config(Router.configure)
    .config(AnimateProvider.configure)
    .config(UibTooltipProvider.configure);

new Registrater(appModule)
    .registerComponents([AppComponent])
    .registerFactories([$exceptionHandlerFactory]);