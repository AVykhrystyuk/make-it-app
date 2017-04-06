'use strict';

import {
    AuthError
} from 'auth';

export default class Router {
    constructor($stateProvider, $urlRouterProvider) {
        this.$stateProvider = $stateProvider;
        this.$urlRouterProvider = $urlRouterProvider;
    }

    registerRoutes() {
        let states = [{
            name: 'today',
            url: '/today',
            component: 'today',
            resolve: {
                todaysData: todayService => {
                    'ngInject';
                    return todayService.getTodaysData().then(() => {
                        throw new AuthError('Bad auth credantials');
                    });
                }
            }
        }, {
            name: 'tommorow',
            url: '/tommorow',
            component: 'tommorow',
            // resolve: {
            //     //todoData: TodoService => TodoService.getTodos()
            // }
        }, {
            name: 'next7Days',
            url: '/next-7-days',
            component: 'next7Days',
            // resolve: {
            //     //todoData: TodoService => TodoService.getTodos()
            // }
        }, {
            name: 'later',
            url: '/later',
            component: 'later',
            resolve: {
                laterData: (laterService, $q) => {
                    'ngInject';

                    //return $q.reject(new AuthError("not authenticated"));
                    return $q.reject('Some unexpected error!');
                    //return laterService.getLaterData();
                }

            }
        }];

        states.forEach(s => this.$stateProvider.state(s));

        this.$urlRouterProvider.otherwise('/today');
    }
}