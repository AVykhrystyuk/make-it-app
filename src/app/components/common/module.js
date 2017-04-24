'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    SearchInlineComponent,
    QuickTaskAddComponent,
    OverdueSectionComponent,
    DoneSectionComponent,
    TaskSectionComponent,
    AddNewTaskComponent,
    DatePickerTemplate
} from '.';

import TaskItemModule from './task-item/module.js';

const ngModule = angular.module('makeItApp.components.common', [TaskItemModule])
    .run(DatePickerTemplate.run);

new Registrater(ngModule)
    .registerComponents([
        QuickTaskAddComponent,
        SearchInlineComponent,
        OverdueSectionComponent,
        DoneSectionComponent,
        TaskSectionComponent,
        AddNewTaskComponent
    ]);

export default ngModule.name;