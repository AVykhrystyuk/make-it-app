'use strict';

export function DateFormatterFilterFactory($filter) {
    'ngInject';

    return function(date, format) {
        let dayDate = new Date(date);
        dayDate.setHours(0, 0, 0, 0);
        let dayDateTime = dayDate.getTime();

        let todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);

        if (dayDateTime === todayDate.getTime()) {
            return "Today";
        }

        let tomorrowDate = offsetDay(todayDate, 1);
        if (dayDateTime === tomorrowDate.getTime()) {
            return "Tomorrow";
        }

        let yesterdayDate = offsetDay(todayDate, -1);
        if (dayDateTime === yesterdayDate.getTime()) {
            return "Yesterday";
        }
        
        return $filter('date')(date, format);
    };

    function offsetDay(date, offset) {
        let resultedDate = new Date(date);
        resultedDate.setDate(date.getDate() + offset);
        return resultedDate;
    }
};

DateFormatterFilterFactory.__name__ = 'dateFormatter';