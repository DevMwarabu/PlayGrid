<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class LeaderboardController extends Controller
{
    public function index()
    {
        $users = User::query()
            ->where('role', 'player')
            ->orderBy('xp', 'desc')
            ->limit(100)
            ->get();

        return response()->json($users);
    }
}
