'use strict';

import angular from 'angular';

import tooltip from 'angular-ui-bootstrap/src/tooltip';
//import popover from 'angular-ui-bootstrap/src/popover';
//import datepicker from 'angular-ui-bootstrap/src/datepicker';
import datepickerPopup from 'angular-ui-bootstrap/src/datepickerPopup';

export default angular.module('makeItApp.angular-ui-bootstrap', [
    tooltip,
    //popover,
    //datepicker,
    datepickerPopup
]).name;