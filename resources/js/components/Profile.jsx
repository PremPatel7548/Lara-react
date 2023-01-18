import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./style1.css";
import image from './images/Userimage.png';
import EditIcon from '@mui/icons-material/Edit';
// import { Dialog } from 'primereact/dialog';


function Profile() {
    // const [dailogs,setdailogs] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [picture, setPicture] = useState('')

    let listParam = useParams();

    const navigate = useNavigate();

    // console.log(listParam.id);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/profile/' + listParam.email)
            .then(Response => {
                setName(Response.data[0].name)
                setEmail(Response.data[0].email)
                setPicture(Response.data[1].image)
            });
    }, [])

    console.log(picture);
    return (
        <div class="col-md-10">
            <form className='col-md-7'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={picture.length?picture:image} alt="Some Problem" height="150px" />
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
                        <Link name="btnEdit" to={`/changeprofile/${email}`} class="btn btn-primary1"><EditIcon></EditIcon></Link>
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
            {/* <Dialog
              visible = {dailogs}
            //   onHide = {()=>setdailogs(false)}
              >
                <div className='confirmation-content flex flex-column align-items-center'>
                    <div className='flex flex-column align-items-center mt-5 w-12'>
                        <div className='flex flex-column justify-content-around w-12 mt-4'>
                            <div className='btn btn-primary'>Save</div>
                        </div>
                    </div>
                </div>
              </Dialog> */}
        </div>

    )

}



export default Profile;
