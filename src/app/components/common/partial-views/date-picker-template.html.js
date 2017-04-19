'use strict';

import datePickerTemplate from './date-picker-template.html';

export class DatePickerTemplate {
    static run($templateCache) {
        'ngInject';
        $templateCache.put("uib/template/datepickerPopup/popup.html", datePickerTemplate);
    }
}