// Without Model DB create Laravel 
<?php
use Illuminate\Support\Facades\DB; 


DB::table('table_name')->insert([
            'id'                 => id,
            'field_name'         => field_value,
            ]);
