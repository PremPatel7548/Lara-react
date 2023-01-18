<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\UserModel;
use App\Models\UserImageModel;

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
            session()->put("email",$user->password);
            return  $user;
        }
    }

    public function change(Request $req)
    {
        $email=$req->email;
        $user=UserModel::where('email','=',$email)->first();

        if(!Hash::check($req->oldPassword,$user->password))
        {
            return false;
        }
        else
        {
            $user->password=Hash::make($req['newPassword']);
            $user->save();
            return true;
        }
    }

    public function profile($email)
    {
        $data=UserModel::where('email','=',$email)->first();
        $data2 = UserImageModel::where('user_id','=',$data->user_id)->first();
        return [$data,$data2];
    }

    public function changeprofile(Request $req,$email)
    {
        $data=UserModel::where('email','=',$email)->first();
        $id = $data->user_id;

        if($data)
        {
            if($req->has('image'))
            {
                $image = $req->file('image');
                $name = time().'.'.$image->getClientOriginalExtension();
                $image->move('images/',$name);
                UserImageModel::create(['user_id'=>$id,'image'=>$name]);
                return response()->json(['success'=>'Upload Successfully']);
            }
            $data->name=$req['name'];
            $data->save();
        }
    }
}
