<?php

namespace Database\Seeders;

use App\Models\Equipment;
use App\Models\Room;
use App\Models\User;
use App\Project;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();


        User::factory()->create([
            'name' => 'Jackie',
            'email' => 'jackie@example.com',
            'password' => bcrypt('capstone'),
            'email_verified_at' => time(),
        ]);

        Equipment::factory()
            ->count(30)
            ->create();

        Room::factory()
            ->count(15)
            ->create();
    }
}
