'use strict';

export class TaskItemOptionsFactory {
    static get __name__() {
        return 'taskItemOptionsFactory';
    }

    constructor() {
        'ngInject';
    }

    createDefaultOptions() {
        return {
            readonly: this.createReadonlyDefaultOptions(),
        };
    }

    createReadonlyDefaultOptions() {
        return {
            hideDate: false
        };
    }
}