'use strict';

import angular from 'angular';
import registerRoutes from './app.routes';

let logMess = () => console.log('moadule is loaded');  
logMess();

const app = angular.module('makeItApp', []);
registerRoutes(app);