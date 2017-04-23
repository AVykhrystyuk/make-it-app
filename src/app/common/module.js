'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    DateFormatterFilterFactory
} from './filters';

import ServicesModule from './services/module.js';
import DirectivesModule from './directives/module.js';

const ngModule = angular.module('makeItApp.common', [
        ServicesModule,
        DirectivesModule
    ]);;

new Registrater(ngModule)
    .registerFilters([DateFormatterFilterFactory]);

export default ngModule.name;