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
    PersistableUserDataService,
    TooltipTriggerService
} from '.';

const ngModule = angular.module('makeItApp.common.services', [
        toastr,
        ngStorage
    ])
    .config(NotificationService.configure)
    .config(PersistableUserDataService.configure);

registerHostInfoConstant(ngModule);

new Registrater(ngModule)
    .registerServices([ScreenService, ScreenDigestedService, EventFactory, NotificationService, ExceptionHandlerService, TooltipTriggerService]);

function registerHostInfoConstant(ngModule) {
    var detector = new TouchDeviceDetector(window);
    ngModule.constant('hostInfo', {
        isTouchDevice: detector.isTouchDevice()
    });
}

export default ngModule.name;