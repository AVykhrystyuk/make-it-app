'use strict';

import angular from 'angular';
import toastr from 'angular-toastr';
import ngStorage from 'angular-local-storage';

import Registrater from 'registrater';
import TouchDeviceDetector from 'touchDeviceDetector';

import {
    ScreenService,
    ScreenDigestedService,
    EventFactory,
    NotificationService,
    ExceptionHandlerService,
    PersistableUserDataService
} from './services';

import DirectivesModule from './directives/module.js';

const ngModule = angular.module('makeItApp.common', [
        toastr,
        ngStorage,
        DirectivesModule
    ])
    .config(NotificationService.configure)
    .config(PersistableUserDataService.configure);

addHostInfo(ngModule);

new Registrater(ngModule)
    .registerServices([ScreenService, ScreenDigestedService, EventFactory, NotificationService, ExceptionHandlerService]);

function addHostInfo(ngModule) {
    var detector = new TouchDeviceDetector(window);
    ngModule.constant('hostInfo', {
        isTouchDevice: detector.isTouchDevice()
    });
}

export default ngModule.name;