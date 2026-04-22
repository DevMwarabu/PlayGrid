<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\Tournament;
use Illuminate\Http\Request;

class TournamentController extends Controller
{
    public function index(Request $request)
    {
        $tournaments = Tournament::query()
            ->when($request->status, fn($q) => $q->where('status', $request->status))
            ->orderBy('start_date', 'asc')
            ->get();

        return response()->json($tournaments);
    }

    public function show(Tournament $tournament)
    {
        return response()->json($tournament->load('matches'));
    }
}
