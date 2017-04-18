'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    GlyphiconDirectiveFactory,
    ContentEditableDirectiveFactory,
    EnterKeyPressDirectiveFactory,
    EscKeyPressDirectiveFactory,
    AutoFocusDirectiveFactory
} from '.';

const ngModule = angular.module('makeItApp.common.directives', []);
    
new Registrater(ngModule)
    .registerDirectives([GlyphiconDirectiveFactory, ContentEditableDirectiveFactory, EnterKeyPressDirectiveFactory, EscKeyPressDirectiveFactory, AutoFocusDirectiveFactory]);

export default ngModule.name;