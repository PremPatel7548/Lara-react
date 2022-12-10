import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';

function ZipMasterSearch(){
    const[zipmasters,setZipmasters] = useState([]);
    const[search,setSearch] = useState("");

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/zipmaster")
        .then(response=>{
            setZipmasters(response.data.data);
        })
    },[]);

    return(
        <div>
            <div className='col-md-4 mt-3'>
                <input type="text" className='bg-dark text-white' name="search" onChange={(e)=>setSearch(e.target.value)} placeholder="Search"></input>
            </div>
           <table className="table bg-dark text-white mt-2 text-center">
                    <thead>
                        <tr>
                        <th>Zip</th>
                            <th>Type</th>
                            <th>PrimaryCity</th>
                            <th>State</th>
                            <th>County</th>
                            <th>Timezone</th>
                            <th>AreaCode</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                            <th>Irs_Estimated_Population</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            zipmasters.filter(zipmaster=>
                                zipmaster.zip.toString().toLowerCase().includes(search)||
                                zipmaster.type.toLowerCase().includes(search)||
                                zipmaster.primary_city.toLowerCase().includes(search)||
                                zipmaster.state.toLowerCase().includes(search)||
                                zipmaster.county.toLowerCase().includes(search)||
                                zipmaster.timezone.toLowerCase().includes(search)||
                                zipmaster.area_code.toString().toLowerCase().includes(search)||
                                zipmaster.latitude.toString().toLowerCase().includes(search)||
                                zipmaster.longitude.toString().toLowerCase().includes(search)||
                                zipmaster.irs_estimated_population.toString().toLowerCase().includes(search))
                            .map(zipmaster=>{
                                return (
                                    <tr key={zipmaster.zip}>
                                        <td>{zipmaster.zip}</td>
                                        <td>{zipmaster.type}</td>
                                        <td>{zipmaster.primary_city}</td>
                                        <td>{zipmaster.state}</td>
                                        <td>{zipmaster.county}</td>
                                        <td>{zipmaster.timezone}</td>
                                        <td>{zipmaster.area_code}</td>
                                        <td>{zipmaster.latitude}</td>
                                        <td>{zipmaster.longitude}</td>
                                        <td>{zipmaster.irs_estimated_population}</td>
                                        <td><Link class="btn btn-warning" to={`/showmaster/${zipmaster.zip}`}>Show</Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    </table>
        </div>
    );
}

export default ZipMasterSearch;
