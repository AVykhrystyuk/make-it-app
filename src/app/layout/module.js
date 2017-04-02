'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import CommonModule from 'common/module.js';;

import {
    NavigationInlineComponent
} from './navigation-inline';

import {
    NavigationSidebarComponent
} from './navigation-sidebar';


let ngModule = angular.module('makeItApp.layout', [CommonModule]);
new Registrater(ngModule).registerComponents([NavigationInlineComponent, NavigationSidebarComponent])

export default ngModule.name;