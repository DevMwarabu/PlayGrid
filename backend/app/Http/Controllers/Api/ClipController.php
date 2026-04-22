<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Clip;
use Illuminate\Http\Request;

class ClipController extends Controller
{
    public function index()
    {
        $clips = Clip::query()
            ->where('is_approved', true)
            ->with('user:id,name,avatar_url')
            ->latest()
            ->get();

        return response()->json($clips);
    }
}
