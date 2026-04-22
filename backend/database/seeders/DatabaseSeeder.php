<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Tournament;
use App\Models\Clip;
use App\Models\Ad;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Admin
        User::updateOrCreate(
            ['email' => 'admin@admin.com'],
            [
                'name' => 'Super Admin',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ]
        );

        // Players
        $players = [
            ['name' => 'X-Phantom', 'email' => 'phantom@playgrid.com', 'xp' => 12500, 'win_rate' => 68.5],
            ['name' => 'SniperElite', 'email' => 'sniper@playgrid.com', 'xp' => 11200, 'win_rate' => 62.1],
            ['name' => 'FistOfFury', 'email' => 'fist@playgrid.com', 'xp' => 9800, 'win_rate' => 58.4],
            ['name' => 'VortexGamer', 'email' => 'vortex@playgrid.com', 'xp' => 8500, 'win_rate' => 54.2],
            ['name' => 'GoalMaster', 'email' => 'goal@playgrid.com', 'xp' => 7200, 'win_rate' => 51.9],
        ];

        foreach ($players as $p) {
            User::updateOrCreate(['email' => $p['email']], [
                'name' => $p['name'],
                'password' => Hash::make('password'),
                'xp' => $p['xp'],
                'win_rate' => $p['win_rate'],
                'role' => 'player',
            ]);
        }

        $user = User::where('role', 'player')->first();

        // Tournaments
        $tournaments = [
            [
                'title' => 'FIFA 26 Elite Pro Cup',
                'game' => 'FIFA 26',
                'status' => 'open',
                'prize_pool' => '$5,000',
                'start_date' => now()->addDays(2),
                'max_players' => 128,
            ],
            [
                'title' => 'Call of Duty: Warzone Season 4',
                'game' => 'Call of Duty',
                'status' => 'ongoing',
                'prize_pool' => '$10,000',
                'start_date' => now()->subHours(2),
                'max_players' => 100,
            ],
            [
                'title' => 'Tekken 8 Iron Fist',
                'game' => 'Tekken 8',
                'status' => 'upcoming',
                'prize_pool' => '$2,500',
                'start_date' => now()->addWeeks(1),
                'max_players' => 64,
            ],
        ];

        foreach ($tournaments as $t) {
            Tournament::updateOrCreate(['title' => $t['title']], $t);
        }

        // Clips
        Clip::updateOrCreate(['title' => 'Insane FIFA Free Kick Goal'], [
            'user_id' => $user->id,
            'video_url' => 'https://example.com/clip1.mp4',
            'game' => 'FIFA 26',
            'views' => 124000,
            'likes' => 21000,
            'is_approved' => true,
        ]);

        // Ads
        Ad::updateOrCreate(['title' => 'Prime Membership'], [
            'image_url' => 'https://example.com/ad1.jpg',
            'destination_url' => '/prime',
            'status' => 'active',
        ]);
    }
}
