export {getDateTime, toRealDateTime, toUnixDateTimeNow}
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
function toRealDateTime(dateTime) {
    /*description: convert unix to real DataTime
                   than again convert in to expected datetime
                    formatted like 1/10/2019 10:01AM
             params: datetime
             return: formatted datetime again call to getDateTime function
                     to display formatted datetime like 1/10/2019 10:01AM
    */
    if (dateTime) {
        return getDateTime(Date(dateTime))
    }
}

function toUnixDateTimeNow() {
    /*description: convert datetime to unix
                   formatted like 1563044813038
             params: datetime
             return: formatted datetime like 1563044813038
    */
    return new Date().getTime()
}

