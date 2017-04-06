'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    NavigationInlineComponent
} from './navigation-inline';

import {
    NavigationSidebarComponent
} from './navigation-sidebar';


const ngModule = angular.module('makeItApp.components.layout', [])
    .constant("screenSizeLimits", {
        xsMax: 767,
    });

new Registrater(ngModule)
    .registerComponents([NavigationInlineComponent, NavigationSidebarComponent]);

export default ngModule.name;