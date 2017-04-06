'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    GlyphiconDirectiveFactory
} from './mi-glyphicon';


const ngModule = angular.module('makeItApp.directives', []);
new Registrater(ngModule)
    .registerDirectives([GlyphiconDirectiveFactory]);

export default ngModule.name;