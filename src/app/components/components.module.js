'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    SearchInlineComponent
} from './search-inline';
import {
    QuickTaskAddComponent
} from './quick-task-add';

const ngModule = angular.module('makeItApp.components', []);
new Registrater(ngModule).registerComponents([QuickTaskAddComponent, SearchInlineComponent]);

export default ngModule.name;