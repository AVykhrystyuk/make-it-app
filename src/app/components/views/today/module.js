'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    TodayComponent,
    TodaySectionComponent,
    TodayService
} from '.';

const ngModule = angular.module('makeItApp.components.views.today', []);

new Registrater(ngModule)
    .registerComponents([TodayComponent, TodaySectionComponent])
    .registerServices([TodayService]);

export default ngModule.name;