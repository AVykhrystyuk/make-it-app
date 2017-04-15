'use strict';

export class LaterService {
    static get __name__() {
        return 'laterService';
    }

    constructor($timeout, $q) {
        'ngInject';
        this.$timeout = $timeout;
        this.$q = $q;
    }

    getLaterData() {
        let deferred = this.$q.defer();

        this.$timeout(() => deferred.resolve('Hello, from LaterService!'), 1000);

        return deferred.promise;
    }
}