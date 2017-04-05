'use strict';

export class TodayService {
    static get __name__() {
        return 'eventFactory';
    }
    constructor() {
        'ngInject';
        this.emptyEvent = {
            $event: {}
        };
    }

    create(event) {
        return {
            $event: event
        };
    }

    empty() {
        return this.emptyEvent;
    }
}