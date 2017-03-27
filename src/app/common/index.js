'use strict';

import angular from 'angular';

import {
    NavigationInlineComponent,
    GlyphiconDirective
} from './navigation-inline';

let components = [NavigationInlineComponent];
let directives = [GlyphiconDirective];

let ngModule = angular.module('makeItApp.common', []);
components.forEach(c => ngModule.component(c.__selector__, c));
directives.forEach(d => ngModule.directive(d.__selector__, d));

export default ngModule.name;