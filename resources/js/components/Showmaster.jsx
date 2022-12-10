import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./style1.css";

function Showmaster() {

    const [zip, setZip] = useState('')
    const [typemaster, setTypemaster] = useState('')
    const [primary_city, setPrimary_city] = useState('')
    const [state, setState] = useState('')
    const [county, setCounty] = useState('')
    const [timezone, setTimezone] = useState('')
    const [area_code, setArea_code] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [irs_estimated_population, setIrs_estimated_population] = useState('')



    let listParam = useParams();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/showmaster/' + listParam.id)
            .then(Response => {
                setZip(Response.data.zip)
                setTypemaster(Response.data.type)
                setPrimary_city(Response.data.primary_city)
                setState(Response.data.state)
                setCounty(Response.data.county)
                setTimezone(Response.data.timezone)
                setArea_code(Response.data.area_code)
                setLatitude(Response.data.latitude)
                setLongitude(Response.data.longitude)
                setIrs_estimated_population(Response.data.irs_estimated_population)
            });
    }, [])

    return (
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black">
                        <div class="card-body p-md-5 main">
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <div className="container">
                                        <form action="" method="post" className="mx-1 mx-md-4 insert">
                                            <div className="form-group mx-5">
                                                <label>Zip </label>
                                                <input type="text" className="form-control" name="zip" value={zip} readOnly />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>Type </label>
                                                <input type="text" className="form-control" name="typemaster" value={typemaster} readOnly />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>Primary_city </label>
                                                <input type="text" className="form-control" name="primary_city" value={primary_city} readOnly />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>State </label>
                                                <input type="text" className="form-control" name="state" value={state} readOnly />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>County </label>
                                                <input type="text" className="form-control" name="county" value={county} readOnly />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>Timezone </label>
                                                <input type="text" className="form-control" name="timezone" value={timezone} readOnly />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>Area_code </label>
                                                <input type="text" className="form-control" name="area_code" value={area_code} readOnly />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>Latitude </label>
                                                <input type="text" className="form-control" name="latitude" value={latitude} readOnly />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>Longitude </label>
                                                <input type="text" className="form-control" name="longitude" value={longitude} readOnly />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>Irs_estimated_population </label>
                                                <input type="text" className="form-control" name="irs_estimated_population" value={irs_estimated_population} readOnly />
                                            </div>

                                            <button className="btn btn-success col-md-6 mx-5">Purchase</button>
                                        </form>
                                    </div>


                                </div>
                                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                        id='i1' alt="Sample image" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showmaster;
