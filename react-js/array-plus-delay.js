  function ArrayPlusDelay(array, delay) {
            var i = 0;

            // seed first call and store interval (to clear later)

            var interval = setInterval(function () {
                // each loop, call passed in function
                //ReactDOM.render(array[i], document.getElementById("root")=);
                if(document.getElementById("id_name") != null) {
                    document.getElementById("id_name").innerHTML = array[i];
                } 	
                // increment, and if we're past array, clear interval
                if (i++ >= array.length - 1) clearInterval(interval);
                return;
            }, delay);

            return interval;
        }
	ArrayPlusDelay(array_numbers, delay_time);

//Example
        ArrayPlusDelay([0,1,5,2], 1000);  // Every Element Call 1 Second Delay

