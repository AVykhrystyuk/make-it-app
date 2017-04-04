export class EventFactory {
    static get __selector__() {
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