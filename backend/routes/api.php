<?php

use App\Http\Controllers\Api\TournamentController;
use App\Http\Controllers\Api\LeaderboardController;
use App\Http\Controllers\Api\ClipController;
use App\Http\Controllers\Api\AdController;
use Illuminate\Support\Facades\Route;

Route::get('/tournaments', [TournamentController::class, 'index']);
Route::get('/tournaments/{tournament}', [TournamentController::class, 'show']);
Route::get('/leaderboard', [LeaderboardController::class, 'index']);
Route::get('/clips', [ClipController::class, 'index']);
Route::get('/ads', [AdController::class, 'index']);
