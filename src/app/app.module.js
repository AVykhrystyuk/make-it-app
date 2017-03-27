'use strict';

import angular from 'angular';

import Registrater from 'registrater';
import {
    AppComponent
} from './app.component.js';
import CommonModule from './common/common.module.js';
import ComponentsModule from './components/components.module.js';

const ngModule = angular.module('makeItApp', [
    CommonModule,
    ComponentsModule
]);

new Registrater(ngModule).registerComponents([AppComponent]);