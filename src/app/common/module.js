'use strict';

import angular from 'angular';
import toastr from 'angular-toastr';
import ngStorage from 'angular-local-storage';

import Registrater from 'registrater';

import {
    ScreenService,
    ScreenDigestedService,
    EventFactory,
    NotificationService,
    ExceptionHandlerService,
    PersistableUserDataService
} from './services';

const ngModule = angular.module('makeItApp.common', [toastr, ngStorage])
    .config(NotificationService.configure)
    .config(PersistableUserDataService.configure);

new Registrater(ngModule)
    .registerServices([ScreenService, ScreenDigestedService, EventFactory, NotificationService, ExceptionHandlerService]);

export default ngModule.name;