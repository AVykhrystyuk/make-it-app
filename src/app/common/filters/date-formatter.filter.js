'use strict';

export function DateFormatterFilterFactory($filter) {
    'ngInject';

    return function(date, format) {
        let day = date.getDay();
        let today = new Date();
        let todayDay = today.getDay();
        if (day === todayDay) {
            return "Today";
        } else if (day === todayDay + 1) {
            return "Tomorrow";
        } else if (day === todayDay - 1) {
            return "Yesterday";
        }

        return $filter('date')(date, format);
    };
};

DateFormatterFilterFactory.__name__ = 'dateFormatter';