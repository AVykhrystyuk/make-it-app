'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    SearchInlineComponent,
    QuickTaskAddComponent,
    TaskItemComponent,
    OverdueSectionComponent,
    DoneSectionComponent,
    DatePickerTemplate
} from '.';

const ngModule = angular.module('makeItApp.components.common', [])
    .run(DatePickerTemplate.run);

new Registrater(ngModule)
    .registerComponents([
        QuickTaskAddComponent,
        SearchInlineComponent,
        TaskItemComponent,
        OverdueSectionComponent,
        DoneSectionComponent
    ]);

export default ngModule.name;