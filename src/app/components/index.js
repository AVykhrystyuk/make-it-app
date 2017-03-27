'use strict';

import angular from 'angular';
import {
    SearchInlineComponent
} from './search-inline';
import {
    QuickTaskAddComponent
} from './quick-task-add';

let components = [QuickTaskAddComponent, SearchInlineComponent];

let ngModule = angular.module('makeItApp.components', []);
components.forEach(c => ngModule.component(c.__selector__, c));

export default ngModule.name;