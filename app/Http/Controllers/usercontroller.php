<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\UserModel;

class usercontroller extends Controller
{
    public function signup(Request $req)
    {
        $user=new UserModel;
        $user->name=$req['name'];
        $user->email=$req['email'];
        $user->password=Hash::make($req['password']);
        $user->save();
    }
    public function logindata(Request $req)
    {
        $user=UserModel::where('email',$req->email)->first();

        // print_r($user->password);
        // exit;
        if(!$user || !Hash::check($req->password,$user->password))
        {
               return NULL;
        }
        else
        {
            session()->put('username',$user->name);
            return  $user->email;
        }
    }
}
