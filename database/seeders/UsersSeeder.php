<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            "email" => "admin@example.com",
            "password" => Hash::make("admin123"),
            "name" => "Admin"
        ]);

        User::create([
            "email" => "user@example.com",
            "password" => Hash::make("user1234"),
            "name" => "User"
        ]);
    }
}
