import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./style1.css";

function Showchild() {

    const [Zip, setZip] = useState('')
    const [City, setCity] = useState('')
    const [State, setState] = useState('')
    const [HomeSale, setHomeSale] = useState('')
    const [HomeBaseValue, setHomeBaseValue] = useState('')
    const [HomeMaxValue, setHomeMaxValue] = useState('')
    const [MedianListPrice, setMedianListPrice] = useState('')
    const [MedianSoldPrice, setMedianSoldPrice] = useState('')
    const [Year, setYear] = useState('')



    let listParam = useParams();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/showchild/' + listParam.id)
            .then(Response => {
                setZip(Response.data.Zip)
                setCity(Response.data.City)
                setState(Response.data.State)
                setHomeSale(Response.data.HomeSale)
                setHomeBaseValue(Response.data.HomeBaseValue)
                setHomeMaxValue(Response.data.HomeMaxValue)
                setMedianListPrice(Response.data.MedianListPrice)
                setMedianSoldPrice(Response.data.MedianSoldPrice)
                setYear(Response.data.Year)
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
                                            <input type="text" className="form-control" name="Zip" value={Zip} readOnly/>
                                        </div>

                                        <div className="form-group mx-5">
                                            <label>City </label>
                                            <input type="text" className="form-control" name="City" value={City} readOnly/>
                                        </div>

                                        <div className="form-group mx-5">
                                            <label>State </label>
                                            <input type="text" className="form-control" name="State" value={State} readOnly/>
                                        </div>

                                        <div className="form-group mx-5">
                                            <label>HomeSale </label>
                                            <input type="text" className="form-control" name="HomeSale" value={HomeSale} readOnly/>
                                        </div>

                                        <div className="form-group mx-5">
                                            <label>HomeBaseValue </label>
                                            <input type="text" className="form-control" name="HomeBaseValue" value={HomeBaseValue} readOnly/>
                                        </div>

                                        <div className="form-group mx-5">
                                            <label>HomeMaxValue </label>
                                            <input type="text" className="form-control" name="HomeMaxValue" value={HomeMaxValue} readOnly/>
                                        </div>

                                        <div className="form-group mx-5">
                                            <label>MedianListPrice </label>
                                            <input type="text" className="form-control" name="MedianListPrice" value={MedianListPrice} readOnly/>
                                        </div>

                                        <div className="form-group mx-5">
                                            <label>MedianSoldPrice </label>
                                            <input type="text" className="form-control" name="MedianSoldPrice" value={MedianSoldPrice} readOnly/>
                                        </div>

                                        <div className="form-group mx-5">
                                            <label>Year </label>
                                            <input type="text" className="form-control" name="Year" value={Year} readOnly/>
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


export default Showchild;
