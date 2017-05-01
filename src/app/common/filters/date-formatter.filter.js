'use strict';

export function DateFormatterFilterFactory($filter) {
    'ngInject';

    return function(date, replaceWithShortNameAllowed = false, formatWithOutYear = 'd MMM', formatWithYear = 'd MMM yyyy') {
        let todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);

        let dayDate = new Date(date);
        dayDate.setHours(0, 0, 0, 0);

        if (replaceWithShortNameAllowed) {
            let shortName = tryReplaceWithShortName(dayDate, todayDate);
            if (shortName) {
                return shortName;
            }
        }

        let isInCurrentYear = todayDate.getFullYear() === dayDate.getFullYear();
        let formatToUse = isInCurrentYear ? formatWithOutYear : formatWithYear;
        return $filter('date')(date, formatToUse);
    };

    function tryReplaceWithShortName(date, todayDate) {
        let dayDateTime = date.getTime();
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

        return undefined;
    }

    function offsetDay(date, offset) {
        let offsetDate = new Date(date);
        offsetDate.setDate(date.getDate() + offset);
        return offsetDate;
    }
};

DateFormatterFilterFactory.__name__ = 'dateFormatter';