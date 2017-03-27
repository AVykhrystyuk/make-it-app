'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    NavigationInlineComponent,
    GlyphiconDirectiveFactory
} from './navigation-inline';

let ngModule = angular.module('makeItApp.common', []);
new Registrater(ngModule)
    .registerComponents([NavigationInlineComponent])
    .registerDirectives([GlyphiconDirectiveFactory]);

export default ngModule.name;