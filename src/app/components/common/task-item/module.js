'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    TaskItemComponent,
    TaskItemReadonlyComponent,
    TaskItemEditableComponent,
    TaskItemOptionsFactory
} from '.';

const ngModule = angular.module('makeItApp.components.common.taskItem', [])

new Registrater(ngModule)
    .registerComponents([
        TaskItemComponent,
        TaskItemReadonlyComponent,
        TaskItemEditableComponent
    ])
    .registerServices([TaskItemOptionsFactory]);

export default ngModule.name;