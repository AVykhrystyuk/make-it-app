'use strict';

import angular from 'angular';

import CommonModule from './common/module.js';
import LayoutModule from './layout/module.js';
import PagesModule from './pages/module.js';

const ngModule = angular.module('makeItApp.components', [CommonModule, LayoutModule, PagesModule]);

export default ngModule.name;