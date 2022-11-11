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
    public function table()
    {
        $cust=customer::all();
        return json_encode($cust);
    }

    public function delete($id)
    {
        $customer = customer::find($id);
        $customer->delete();
    }

    public function edit($id)
    {
        $customer = customer::find($id);

        return response()->json([
            'customer' => $customer,
        ]);
    }
}
