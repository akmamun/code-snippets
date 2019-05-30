export function _getDateTime(dateTime) {
    if (dateTime) {
        let date = new Date(dateTime);
        let options = {
            hour: 'numeric',
            minute: 'numeric',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timeZone: 'UTC'
        };
        return Intl.DateTimeFormat('en-BD', options).format(date)
        //format like 10/10/2019 10:20AM
    }
}

