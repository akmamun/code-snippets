function getDateTime(dateTime) {
        /*  description:  this function is for formated datetime data,
                formatted like international datetime format: 12hr/AM/PM
                Additionally use timeZone:"Asia/Dhaka"
       params:  datetime
       return:  formatted date like 03:45PM 10/2/2019
*/
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

function getDateTime(dateTime) {
    if (dateTime) {
        let date = new Date(dateTime);
        let options = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        };
        return Intl.DateTimeFormat('en-BD', options).format(date)
        //format like Jul 16, 2019, 8:01:23 PM
    }
}

function getHourData(dateTime) {
    /*  description:  this function is for formated datetime data,
            formatted like international datetime format: 12hr/AM/PM
            Additionally use timeZone:"Asia/Dhaka"
   params:  datetime
   return:  formatted date like 03:45PM
     */
    if (dateTime) {
        return new Date(dateTime).toLocaleString('en-US', {hour: 'numeric', hour12: true})
    }
}

function getUnixDateTimeNow() {
    /*description: convert datetime to unix
                   formatted like 1563044813038
             params: datetime
             return: formatted datetime like 1563044813038
    */
    return new Date().getTime()
}