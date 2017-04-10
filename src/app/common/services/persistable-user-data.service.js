'use strict';

export class PersistableUserDataService {
    static get __name__() {
        return 'persistableUserDataService';
    }

    static configure(localStorageServiceProvider) {
        'ngInject';
        localStorageServiceProvider
            .setPrefix('makeItApp')
            .setNotify(false, false);
    }

    constructor(localStorageService) {
        'ngInject';
        this.localStorageService = localStorageService;
    }

    get(key) {
        return this.localStorageService.get(key);
    }

    keys() {
        return this.localStorageService.keys();
    }

    set(key, value) {
        return this.localStorageService.set(key, value);
    }

    remove(key) {
        return this.localStorageService.remove(key);
    }

    clear() {
        return this.localStorageService.clearAll();
    }
}