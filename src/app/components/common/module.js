'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    SearchInlineComponent,
    QuickTaskAddComponent,
    DatepickerAutoFocusDirectiveFactory,
    TaskItemComponent,
    OverdueSectionComponent,
    DoneSectionComponent
} from '.';

const ngModule = angular.module('makeItApp.components.common', []);

new Registrater(ngModule)
    .registerComponents([
        QuickTaskAddComponent,
        SearchInlineComponent,
        TaskItemComponent,
        OverdueSectionComponent,
        DoneSectionComponent
    ])
    .registerDirectives([DatepickerAutoFocusDirectiveFactory]);

export default ngModule.name;