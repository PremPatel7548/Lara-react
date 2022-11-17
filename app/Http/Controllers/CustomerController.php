<?php

namespace App\Http\Controllers;
use App\Models\customer;
use App\Models\zipcodesearch;
use App\Models\realtorScrapedDump;

use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function insertmaster(Request $request)
    {
        $customer = New zipcodesearch;
        $customer->zip=$request['zip'];
        $customer->type=$request['typemaster'];
        $customer->primary_city=$request['primary_city'];
        $customer->state=$request['state'];
        $customer->county=$request['county'];
        $customer->timezone=$request['timezone'];
        $customer->area_code=$request['area_code'];
        $customer->latitude=$request['latitude'];
        $customer->longitude=$request['longitude'];
        $customer->irs_estimated_population=$request['irs_estimated_population'];

        //print_r($request->all());

        $customer->save();
    }
    public function zipmaster()
    {
        $cust=zipcodesearch::paginate(30);
        return $cust;
        // $cust=realtorScrapedDump::all();
        // return json_encode($cust);
    }

    public function delete($id)
    {
        $customer = zipcodesearch::find($id);
        $customer->delete();
    }

    public function edit($id)
    {
        $customer = zipcodesearch::find($id);

        return $customer;

    }

    public function update(Request $request,$id)
    {
        $customer = zipcodesearch::find($id);

        // $customer->custName = $data['name'];
        // $customer->City = $data['city'];
        // $customer->save();

        $customer->zip=$request['zip'];
        $customer->type=$request['typemaster'];
        $customer->primary_city=$request['primary_city'];
        $customer->state=$request['state'];
        $customer->county=$request['county'];
        $customer->timezone=$request['timezone'];
        $customer->area_code=$request['area_code'];
        $customer->latitude=$request['latitude'];
        $customer->longitude=$request['longitude'];
        $customer->irs_estimated_population=$request['irs_estimated_population'];

        $customer->save();
    }


    public function zipchild()
    {
        $cust=realtorScrapedDump::paginate(30);
        return $cust;
        // $cust=realtorScrapedDump::all();
        // return json_encode($cust);
    } 

    public function insertchild(Request $request)
    {
        $customer = New realtorScrapedDump;
        $customer->Zip=$request['Zip'];
        $customer->City=$request['City'];
        $customer->State=$request['State'];
        $customer->HomeSale=$request['HomeSale'];
        $customer->HomeBaseValue=$request['HomeBaseValue'];
        $customer->HomeMaxValue=$request['HomeMaxValue'];
        $customer->MedianListPrice=$request['MedianListPrice'];
        $customer->MedianSoldPrice=$request['MedianSoldPrice'];
        $customer->Year=$request['Year'];
        //print_r($request->all());

        $customer->save();
    }

    public function editchild($id)
    {
        $customer = realtorScrapedDump::find($id);

        return $customer;

    }

    public function updatechild(Request $request,$id)
    {
        $customer = realtorScrapedDump::find($id);

        // $customer->custName = $data['name'];
        // $customer->City = $data['city'];
        // $customer->save();
        $customer->Zip=$request['Zip'];
        $customer->City=$request['City'];
        $customer->State=$request['State'];
        $customer->HomeSale=$request['HomeSale'];
        $customer->HomeBaseValue=$request['HomeBaseValue'];
        $customer->HomeMaxValue=$request['HomeMaxValue'];
        $customer->MedianListPrice=$request['MedianListPrice'];
        $customer->MedianSoldPrice=$request['MedianSoldPrice'];
        $customer->Year=$request['Year'];
        //print_r($request->all());

        $customer->save();
    }

    public function deletechild($id)
    {
        $customer = realtorScrapedDump::find($id);
        $customer->delete();
    }
}