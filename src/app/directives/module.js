'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    GlyphiconDirectiveFactory,
    ContentEditableDirectiveFactory,
    EnterKeyPressDirectiveFactory,
    EscKeyPressDirectiveFactory
} from '.';

const ngModule = angular.module('makeItApp.directives', []);
    
new Registrater(ngModule)
    .registerDirectives([GlyphiconDirectiveFactory, ContentEditableDirectiveFactory, EnterKeyPressDirectiveFactory, EscKeyPressDirectiveFactory]);

export default ngModule.name;