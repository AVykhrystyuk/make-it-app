'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    SearchInlineComponent,
    QuickTaskAddComponent,
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
    ]);

export default ngModule.name;