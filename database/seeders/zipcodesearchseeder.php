<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\zipcodesearch;

class zipcodesearchseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        zipcodesearch::truncate();
        $csvData = fopen(base_path('database/csv/database_master.csv'),'r');

        $transRaw = true;
        while(($data = fgetcsv($csvData,'29876')) !== false)
        {
            if(!$transRaw)
            {
                zipcodesearch::create([
                    'zip' => $data[0],
                    'type' => $data[1],
                    'primary_city' => $data[2],
                    'state' => $data[3],
                    'county' => $data[4],
                    'timezone' => $data[5],
                    'area_code' => $data[6],
                    'latitude' => $data[7],
                    'longitude' => $data[8],
                    'irs_estimated_population' => $data[9],
                ]);
            }
            $transRaw = false;
        }
        fclose($csvData);
    }
}
