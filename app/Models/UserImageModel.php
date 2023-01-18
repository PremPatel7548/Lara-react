<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserImageModel extends Model
{
    use HasFactory;
    protected $table="user_image";
    protected $primaryKey="image_id";
    protected $fillable = ['user_id','image'];
}
