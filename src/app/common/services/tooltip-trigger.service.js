'use strict';

export class TooltipTriggerService {
    static get __name__() {
        return 'tooltipTriggerService';
    }
    
    constructor(hostInfo) {
        'ngInject';
        this.hostInfo = hostInfo;
    }

    getTrigger() {
        return this.hostInfo.isTouchDevice ? 'none' : 'mouseenter';
    }
}