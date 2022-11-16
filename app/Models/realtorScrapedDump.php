<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class realtorScrapedDump extends Model
{
    use HasFactory;
    protected $table="realtor_scraped_dumps";
    protected $fillable=[
        'Zip',
        'City',
        'State',
        'HomeSale',
        'HomeBaseValue',
        'HomeMaxValue',
        'MedianListPrice',
        'MedianSoldPrice',
        'Year',
    ];
}
