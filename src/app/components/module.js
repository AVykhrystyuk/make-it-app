'use strict';

import angular from 'angular';

import CommonModule from './common/module.js';
import LayoutModule from './layout/module.js';
import ViewsModule from './views/module.js';

const ngModule = angular.module('makeItApp.components', [CommonModule, LayoutModule, ViewsModule]);

export default ngModule.name;