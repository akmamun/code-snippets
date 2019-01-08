#make seeder
DB::table('table_name')->truncate();

            DB::table('table_name')->insert([
                "name"               => 'name',
		"other"              => 'other',
                "created_at"         => Carbon::now(),
                "updated_at"         => Carbon::now()
            ]);


        
#facker 
//        $faker = Faker::create();
//        foreach (range(2,10) as $index) {
       DB::table('table_name')->insert([
                "name"               => 'name',
		"other"              => 'other',
                "created_at"         => Carbon::now(),
                "updated_at"         => Carbon::now()
            ]);
}


   
