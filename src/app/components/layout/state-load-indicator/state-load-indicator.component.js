'use strict';

import './state-load-indicator.less';
import template from './state-load-indicator.html';

class Сontroller {
    constructor($transitions) {
        'ngInject';
        this.$transitions = $transitions;
    }
    $onInit() {
        this.inTransition = false;
        this.inInitialTransition = false;
        this.initialTransitionMessage = '';
        this.$transitions.onStart({}, t => this._onTransitionStart(t));
    }

    _onTransitionStart(transitions) {
        let onTransitionEnd;

        let fromState = transitions.from();
        if (fromState.name) {
            this.inTransition = true;
            onTransitionEnd = () => {
                this.inTransition = false;
            };
        } else {
            let toState = transitions.to();
            this.initialTransitionMessage = toState.initialLoadingMessage || this.defaultLoadingMessage || 'Content is loading, please wait...';
            this.inInitialTransition = true;
            onTransitionEnd = () => {
                this.inInitialTransition = false;
            };
        }

        transitions.promise.then(onTransitionEnd, onTransitionEnd);
    }
}

export const StateLoadIndicatorComponent = {
    __name__: 'stateLoadIndicator',
    template,
    controller: Сontroller,
    bindings: {
        defaultLoadingMessage: '<'
    }
};