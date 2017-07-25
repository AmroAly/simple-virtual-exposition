<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		factory(App\Company::class, 10)->create();

        $this->call(EventsTableSeeder::class);

        factory(App\Stand::class, 40)->create();
	}
}
