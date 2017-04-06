'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    ScreenService,
    ScreenDigestedService,
    EventFactory,
    NotificationService,
    ExceptionHandlerService
} from './services';

const ngModule = angular.module('makeItApp.common', []);
ngModule.config(NotificationService.configure);

new Registrater(ngModule)
    .registerServices([ScreenService, ScreenDigestedService, EventFactory, NotificationService, ExceptionHandlerService]);

export default ngModule.name;