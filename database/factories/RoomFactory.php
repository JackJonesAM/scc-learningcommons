<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Room>
 */
class RoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->sentence(),
            'description' => fake()->realText(),
            'type' => fake()->randomElement(['Meeting', 'Collaboratory', 'Tutoring']),
            'status' => fake()->randomElement(['available', 'unavailable']),
            'created_by' => 1,
            'updated_by' => 1,
        ];
    }
}
