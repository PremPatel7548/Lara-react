import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./style1.css";
import image from './images/Userimage.png';
import EditIcon from '@mui/icons-material/Edit';

function Changeprofile() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    // const [picture, setPicture] = useState('')

    let listParam = useParams();

    const navigate = useNavigate();


    // const handleUpdate = () => {
    //     const data = {
    //         name: name,
    //         // email: email,
    //         picture: picture,
    //     }
    //     axios.post('http://127.0.0.1:8000/profile/' + listParam.email, data)
    //         .then(navigate('/zipmaster')
    //         );
    // }

    // console.log(listParam.id);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/profile/' + listParam.email)
            .then(Response => {
                setName(Response.data.name)
                setEmail(Response.data.email)
                // setPicture(Response.data.picture)
            });
    }, [])



    // const changeName = (e) => {
    //     setName(e.target.value);
    // }
    // // const changeEmail = (e) => {
    // //     setEmail(e.target.value);
    // // }
    // const changePicture = (e) => {
    //     setPicture(e.target.value);
    // }

    return (
        <div class="col-md-12">
            <form method=''>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={image} alt="User" height="150px" />
                    </div>
                    <div className='col-md-6'>
                        <div className='profile-head'>
                            <h3 className='profile-head-h3 mt-4'>
                                {name}
                            </h3>
                            {
                                sessionStorage.getItem('user') == 'Admin' ?
                                    <h5 className='profile-head-h5 mb-5'>
                                        Admin
                                    </h5> :
                                    <h5 className='profile-head-h5 mb-5'>
                                    User
                                </h5>


                                }
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <button type="button" name="btnEdit" class="btn btn-primary1"><EditIcon></EditIcon></button>
                    </div>
                </div>

                <div className='row mt-3 ml-3'>
                    <div className='col-md-6'>
                        <lable className='lable'>
                            User Id
                        </lable>
                    </div>
                    <div className='col-md-6'>
                        <p>9265922183</p>
                    </div>
                </div>

                <div className='row ml-3'>
                    <div className='col-md-6'>
                        <lable className='lable'>
                            User Name
                        </lable>
                    </div>
                    <div className='col-md-6'>
                        <p>{name}</p>
                    </div>
                </div>

                <div className='row ml-3'>
                    <div className='col-md-6'>
                        <lable className='lable'>
                            Email
                        </lable>
                    </div>
                    <div className='col-md-6'>
                        <p>{email}</p>
                    </div>
                </div>

                <div className='row ml-3'>
                    <div className='col-md-6'>
                        <lable className='lable'>
                            Age
                        </lable>
                    </div>
                    <div className='col-md-6'>
                        <p>---</p>
                    </div>
                </div>

            </form>
        </div>

    )

}



export default Changeprofile;
