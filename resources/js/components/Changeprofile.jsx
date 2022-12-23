import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./style1.css";

function Changeprofile() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')

    let listParam = useParams();

    const navigate = useNavigate();


    const handleChangePassword = () => {
        const data = {
            name: name,
            email: email,
            image: image
        }
        axios.post('http://127.0.0.1:8000/profile/' + listParam.email, data)
            .then(navigate(`/profile/${email}`)
            );
    }

    // console.log(listParam.id);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/profile/' + listParam.email)
            .then(Response => {
                setName(Response.data.name)
                setEmail(Response.data.email)
                setPicture(Response.data.image)
            });
    }, [])



    const changeUserName = (e) => {
        setName(e.target.value);
    }
    // const changeEmail = (e) => {
    //     setEmail(e.target.value);
    // }
    const changeImage = (e) => {
        setImage(e.target.value);
    }

    return (
        <div class="main-block">
            <div className="left-part">
                <i className="fas fa-envelope"></i>
                <i className="fas fa-at"></i>
                <i className="fas fa-mail-bulk"></i>
            </div>
            <div className='formlogin'>
                <h1>Edit Profile</h1>
                <form className="info" encType='multipart/form-data'>
                    <input type="text" name="UserName" value={name} className='text-dark' onChange={changeUserName}/>
                    <input type="file" name="file" className='text-dark' onChange={changeImage}/>
                </form>
                <button type="submit" className='btn btn-danger col-md-11 mx-2' onClick={handleChangePassword}>Edit</button>
            </div>
        </div>
    )

}



export default Changeprofile;
