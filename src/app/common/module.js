'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    ScreenService,
    ScreenDigestedService,
    EventFactory
} from './services';

let ngModule = angular.module('makeItApp.common', []);
new Registrater(ngModule)
    .registerServices([ScreenService, ScreenDigestedService, EventFactory]);

export default ngModule.name;