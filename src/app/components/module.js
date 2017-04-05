'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    TodayComponent
} from './today';
import {
    TommorowComponent
} from './tommorow';
import {
    Next7DaysComponent
} from './next-7-days';
import {
    LaterComponent
} from './later';


const ngModule = angular.module('makeItApp.components', []);
new Registrater(ngModule).registerComponents([TodayComponent, TommorowComponent, Next7DaysComponent, LaterComponent]);

export default ngModule.name;