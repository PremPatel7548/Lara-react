import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import { get } from 'lodash';

function Userhome(){
    const[zipchilds,setZipchilds] = useState([]);
    const[search,setSearch] = useState();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/zipchild")
        .then(response=>{
            setZipchilds(response.data.data);
        })
    },[]);

    const SearchZip = () =>
    {

    }
    return(
        <div>
            <div className='col-md-4 mt-3'>
                <input type="text" className='bg-dark text-white' name="search" onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="Search"></input>
            </div>
           <table className="table bg-dark text-white mt-4 text-center">
                    <thead>
                        <tr>
                            <th>Zip</th>
                            <th>City</th>
                            <th>State</th>
                            <th>HomeSale</th>
                            <th>HomeBaseValue</th>
                            <th>HomeMaxValue</th>
                            <th>MedianListPrice</th>
                            <th>MedianSoldPrice</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            zipchilds.filter(zipchild=>zipchild.City.toLowerCase().includes(search)||zipchild.State.toLowerCase().includes(search))
                            .map(zipchild=>{
                                return (
                                    <tr key={zipchild.Zip}>
                                        <td>{zipchild.Zip}</td>
                                        <td>{zipchild.City}</td>
                                        <td>{zipchild.State}</td>
                                        <td>{zipchild.HomeSale}</td>
                                        <td>{zipchild.HomeBaseValue}</td>
                                        <td>{zipchild.HomeMaxValue}</td>
                                        <td>{zipchild.MedianListPrice}</td>
                                        <td>{zipchild.MedianSoldPrice}</td>
                                        <td>{zipchild.Year}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    </table>
        </div>
    );
}

export default Userhome;
