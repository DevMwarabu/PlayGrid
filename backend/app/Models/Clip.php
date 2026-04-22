<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Clip extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'video_url',
        'thumbnail_url',
        'game',
        'views',
        'likes',
        'is_approved',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
