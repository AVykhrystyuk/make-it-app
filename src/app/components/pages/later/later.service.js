'use strict';

export class LaterService {
    static get __name__() {
        return 'laterService';
    }

    constructor($q) {
        'ngInject';
        this.$q = $q;
    }

    getLaterData() {
        var deferred = this.$q.defer();

        setTimeout(() => deferred.resolve('Hello, from LaterService!'), 1000);

        return deferred.promise;
    }
}