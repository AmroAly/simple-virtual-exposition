<?php

use Illuminate\Database\Seeder;

class EventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('events')->insert([
            [
                'name' => 'Mobiles Event',
                'coordinates' => '135.5022,34.6937',
                'city' => 'Osaka'
            ],
            [
                'name' => 'Weapons Event',
                'coordinates' => '37.6173,55.7558',
                'city' => 'Moscow'
            ],
            [
                'name' => 'Tech Event',
                'coordinates' => '90.4125,23.8103',
                'city' => 'Dhaka'
            ],
            [
                'name' => 'Tourism Event',
                'coordinates' => '31.2357,30.0444',
                'city' => 'Greater Cairo'
            ],
            [
                'name' => 'New Cars Event',
                'coordinates' => '-118.2437,34.0522',
                'city' => 'Los Angeles'
            ],
            [
                'name' => 'Motor Bikes Event',
                'coordinates' => '100.5018,13.7563',
                'city' => 'Bangkok'
            ],
            [
                'name' => 'Food Event',
                'coordinates' => '88.3639,22.5726',
                'city' => 'Kolkata'
            ],
            [
                'name' => 'Air planes Event',
                'coordinates' => '-58.3816,-34.6037',
                'city' => 'Buenos Aires'
            ],
            [
                'name' => 'Clothing Event',
                'coordinates' => '28.9784,41.0082',
                'city' => 'Istanbul'
            ]
        ]);
    }
}
