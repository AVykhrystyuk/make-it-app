'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    TodayComponent,
    TodayService
} from './today';
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

const ngModule = angular.module('makeItApp.components.pages', []);

new Registrater(ngModule)
    .registerComponents([TodayComponent, TommorowComponent, Next7DaysComponent, LaterComponent])
    .registerServices([TodayService, LaterService]);

export default ngModule.name;