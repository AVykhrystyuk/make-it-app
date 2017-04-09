'use strict';

export class TodayService {
    static get __name__() {
        return 'todayService';
    }

    constructor($q) {
        'ngInject';
        this.$q = $q;
    }

    getTodaysData() {
        var deferred = this.$q.defer();

        setTimeout(() => deferred.resolve('Hello, from TodayService!'), 3000);

        return deferred.promise;
    }
}