<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tournament extends Model
{
    protected $fillable = [
        'title',
        'game',
        'rules',
        'status',
        'prize_pool',
        'start_date',
        'max_players',
        'banner_url',
        'settings',
    ];

    public function matches()
    {
        return $this->hasMany(TournamentMatch::class);
    }

}
