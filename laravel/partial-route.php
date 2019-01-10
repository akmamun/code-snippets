<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|  Add this web.php in laravel 
|--------------------------------------------------------------------------
|
*/
$route_partials = [
	'routeName',   // add file name of partial route
	'testRoute'
];

foreach ($route_partials as $partial) {

    $file = __DIR__.'/'.$partial.'.php';

    if ( ! file_exists($file))
    {
        $msg = "Route partial [{$partial}] not found.";
        throw new \Illuminate\Filesystem\FileNotFoundException($msg);
    }

    require_once $file;
}


// In testRoute.php Adding Route, Write what you need
Route::get('test', 'TestController@index')->name('test.index');
Route::get('test/create', 'TestController@create')->name('test.create');
