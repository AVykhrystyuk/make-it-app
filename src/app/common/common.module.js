'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    SearchInlineComponent
} from './search-inline';
import {
    QuickTaskAddComponent
} from './quick-task-add';

import {
    NavigationInlineComponent,
    GlyphiconDirectiveFactory
} from './navigation-inline';

let ngModule = angular.module('makeItApp.common', []);
new Registrater(ngModule)
    .registerComponents([QuickTaskAddComponent, SearchInlineComponent, NavigationInlineComponent])
    .registerDirectives([GlyphiconDirectiveFactory]);

export default ngModule.name;