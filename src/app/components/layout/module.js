'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    NavigationInlineComponent
} from './navigation-inline';

import {
    NavigationSidebarComponent
} from './navigation-sidebar';

import {
    StateLoadIndicatorComponent
} from './state-load-indicator';

const ngModule = angular.module('makeItApp.components.layout', [])
    .constant("screenSizeLimits", {
        xsMax: 767,
    });

new Registrater(ngModule)
    .registerComponents([NavigationInlineComponent, NavigationSidebarComponent, StateLoadIndicatorComponent]);

export default ngModule.name;