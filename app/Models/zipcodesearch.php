<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class zipcodesearch extends Model
{
    use HasFactory;
    protected $table="zipcodesearches";
    protected $fillable=[
        'zip',
        'type',
        'primary_city',
        'state',
        'county',
        'timezone',
        'latitude',
        'longitude',
        'irs_estimated_population',
    ];
}
