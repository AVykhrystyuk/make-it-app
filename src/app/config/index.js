'use strict';

import Router from './router';

export default function configure(appModule) {
    appModule.config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        new Router($stateProvider, $urlRouterProvider).registerRoutes();
    });
};