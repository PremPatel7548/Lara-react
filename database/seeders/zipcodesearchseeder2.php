<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\realtorScrapedDump;

class zipcodesearchseeder2 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        realtorScrapedDump::truncate();
        $csvData = fopen(base_path('database/csv/zipcodesearch2.csv'),'r');

        $transRaw = true;
        while(($data = fgetcsv($csvData,'22143')) !== false)
        {
            if(!$transRaw)
            {
                realtorScrapedDump::create([
                    'Zip' => $data[0],
                    'City' => $data[1],
                    'State' => $data[2],
                    'HomeSale' => $data[3],
                    'HomeBaseValue' => $data[4],
                    'HomeMaxValue' => $data[5],
                    'MedianListPrice' => $data[6],
                    'MedianSoldPrice' => $data[7],
                    'Year' => $data[8],
                ]);
            }
            $transRaw = false;
        }
        fclose($csvData);
    }
}
