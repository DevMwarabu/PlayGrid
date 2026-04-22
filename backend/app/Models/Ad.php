<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    protected $fillable = [
        'title',
        'image_url',
        'destination_url',
        'status',
        'views',
        'clicks',
        'start_date',
        'end_date',
    ];

}
