import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./style1.css";

function Changeprofile() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)

    let listParam = useParams();

    const navigate = useNavigate();


    const handleEdit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append(
            'image', image);
            data.append('name',name);

        axios.post('http://127.0.0.1:8000/profile/' + listParam.email, data)
            .then(navigate(`/profile/${email}`));
    }

    // console.log(listParam.id);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/profile/' + listParam.email)
            .then(Response => {
                setName(Response.data[0].name)
                setEmail(Response.data[0].email)
            });
    }, [])



    const changeUserName = (e) => {
        setName(e.target.value);
    }
    // const changeEmail = (e) => {
    //     setEmail(e.target.value);
    // }
    const changeImage = (e) => {
        setImage(e.target.files[0]);
    }
    console.log(image);

    return (
        <div class="main-block">
            <div className="left-part">
                <i className="fas fa-envelope"></i>
                <i className="fas fa-at"></i>
                <i className="fas fa-mail-bulk"></i>
            </div>
            <div className='formlogin'>
                <h1>Edit Profile</h1>
                <form className="info col-md-12" onSubmit={handleEdit} encType="multipart/form-data">
                    <input type="text" name="UserName" value={name} className='text-dark' onChange={changeUserName}/>
                    <input type="file"name="image" className='text-dark' onChange={changeImage}/>
                <button type="submit" className='btn btn-danger col-md-11 mx-2'>Edit</button>
                </form>
            </div>
        </div>
    )

}



export default Changeprofile;
