import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./style1.css";

function Changeprofile() {
    const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    const [picture, setPicture] = useState('')

    let listParam = useParams();

    const navigate = useNavigate();


    const handleUpdate = () => {
        const data = {
            name: name,
            // email: email,
            picture: picture,
        }
        axios.post('http://127.0.0.1:8000/profile/' + listParam.email, data)
            .then(navigate('/zipmaster')
            );
    }

    // console.log(listParam.id);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/profile/' + listParam.email)
            .then(Response => {
                setName(Response.data.name)
                // setEmail(Response.data.email)
                setPicture(Response.data.picture)
            });
    }, [])



    const changeName = (e) => {
        setName(e.target.value);
    }
    // const changeEmail = (e) => {
    //     setEmail(e.target.value);
    // }
    const changePicture = (e) => {
        setPicture(e.target.value);
    }


    // return (
    //     <div className="container">
    //                     <form action="" method="post" className="col-md-7 mt-4 bg-dark text-white row">
    //         <div className="form-group mx-5">
    //             <label>Zip </label>
    //             <input type="text" className="form-control" name="zip" onChange={changeZip} value={zip}/>
    //         </div>

    //         <div className="form-group mx-5">
    //             <label>Type </label>
    //             <input type="text" className="form-control" name="typemaster" onChange={changeTypemaster} value={typemaster}/>
    //         </div>

    //         <div className="form-group mx-5">
    //             <label>Primary_city </label>
    //             <input type="text" className="form-control" name="primary_city" onChange={changePrimary_city} value={primary_city}/>
    //         </div>

    //         <div className="form-group mx-5">
    //             <label>State </label>
    //             <input type="text" className="form-control" name="state" onChange={changeState} value={state}/>
    //         </div>

    //         <div className="form-group mx-5">
    //             <label>County </label>
    //             <input type="text" className="form-control" name="county" onChange={changeCounty} value={county}/>
    //         </div>

    //         <div className="form-group mx-5">
    //             <label>Timezone </label>
    //             <input type="text" className="form-control" name="timezone" onChange={changeTimezone} value={timezone}/>
    //         </div>

    //         <div className="form-group mx-5">
    //             <label>Area_code </label>
    //             <input type="text" className="form-control" name="area_code" onChange={changeArea_code} value={area_code}/>
    //         </div>

    //         <div className="form-group mx-5">
    //             <label>Latitude </label>
    //             <input type="text" className="form-control" name="latitude" onChange={changeLatitude} value={latitude}/>
    //         </div>

    //         <div className="form-group mx-5">
    //             <label>Longitude </label>
    //             <input type="text" className="form-control" name="longitude" onChange={changeLongitude} value={longitude}/>
    //         </div>

    //         <div className="form-group mx-5">
    //             <label>Irs_estimated_population </label>
    //             <input type="text" className="form-control" name="irs_estimated_population" onChange={changeIrs_estimated_population} value={irs_estimated_population}/>
    //         </div>

    //         <button className="btn btn-outline-warning col-md-6 mx-5" onClick={handleUpdate}>Update</button>
    //     </form>
    //     </div>
    // );

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
                                                <label>Username </label>
                                                <input type="text" className="form-control" name="name" onChange={changeName} value={name} />
                                            </div>

                                            {/* <div className="form-group mx-5">
                                                <label>Email </label>
                                                <input type="email" className="form-control" name="email" onChange={changeEmail} value={email} />
                                            </div> */}

                                            <div className="mx-5">
                                                <label>Edit Picture </label>
                                                <input type="file" name="picture" onChange={changePicture} value={picture} />
                                            </div>

                                            <button className="btn btn-outline-warning col-md-6 mx-5" onClick={handleUpdate}>Edit Profile</button>
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


export default Changeprofile;
