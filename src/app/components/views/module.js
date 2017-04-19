'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import TodayModule from './today/module.js';

import {
    TomorrowComponent
} from './tomorrow';
import {
    Next7DaysComponent
} from './next-7-days';
import {
    LaterComponent,
    LaterService,
} from './later';

const ngModule = angular.module('makeItApp.components.views', [TodayModule]);

new Registrater(ngModule)
    .registerComponents([TomorrowComponent, Next7DaysComponent, LaterComponent])
    .registerServices([LaterService]);

export default ngModule.name;