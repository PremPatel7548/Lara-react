<?php

namespace App\Http\Controllers;
use App\Models\customer;

use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function add(Request $request)
    {
        $customer = New customer;
        $customer->custName=$request['name']; 
        $customer->City=$request['city'];
        $customer->save();
    }
}
