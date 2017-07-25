<?php

// $factory->define(App\User::class, function (Faker\Generator $faker) {
//     static $password;
//
//     return [
//         'name' => $faker->name,
//         'email' => $faker->unique()->safeEmail,
//         'password' => $password ?: $password = bcrypt('secret'),
//         'is_company' => $faker->boolean(),
//         'remember_token' => str_random(10),
//     ];
// });

$factory->define(App\Company::class, function (Faker\Generator $faker) {

    return [
        'admin' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'marketing_document' => str_random(10),
        'logo' => str_random(10),
    ];
});

$factory->define(App\Stand::class, function (Faker\Generator $faker) {

    return [
        'company_id' => null,
        'booked' => false,
        'event_id' => $faker->numberBetween(1,9),
        'price' => $faker->randomFloat(null,150, 250),
        'picture' => 'https://s-media-cache-ak0.pinimg.com/originals/b6/f3/1f/b6f31f40341d141305951810937b7b03.jpg'
    ];
});
