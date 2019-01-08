<?php 
$current_time   = Carbon::now('Asia/Dhaka');
            $till_time      = Carbon::parse(field_name, 'Asia/Dhaka');
            $diff           = $till_time->diffInSeconds($current_time,false);
//            false for negative otherwise show negative value


// example
 $current_time   = Carbon::now('Asia/Dhaka');
            $till_time      = Carbon::parse($signal->till, 'Asia/Dhaka');
            $diff           = $till_time->diffInSeconds($current_time,false);
//            false for negative
