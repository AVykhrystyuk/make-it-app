'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import TodayModule from './today/module.js';

import {
    TommorowComponent
} from './tommorow';
import {
    Next7DaysComponent
} from './next-7-days';
import {
    LaterComponent,
    LaterService,
} from './later';

const ngModule = angular.module('makeItApp.components.views', [TodayModule]);

new Registrater(ngModule)
    .registerComponents([TommorowComponent, Next7DaysComponent, LaterComponent])
    .registerServices([LaterService]);

export default ngModule.name;