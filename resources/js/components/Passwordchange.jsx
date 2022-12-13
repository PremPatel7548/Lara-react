import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./style1.css";

function Passwordchange() {
    //const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const [errorPassword, passwordMsg] = useState('');
    const [errorCpassword, cpasswordMsg] = useState('');
    const [errorEmail, emailMsg] = useState('');
    const [errorAll, AllMsg] = useState('');
    // const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    const validate = () => {
        if (email == '' || password == '' || cpassword == '') {
            AllMsg('Please Fill All Field');
        }
        else if (!email.includes('@') && email.length < 12) {
            emailMsg('please Enter Valid Email');
        }
        else if (password.length < 7) {
            passwordMsg('Password Atleast 8 Character');
        }
        else if (password != cpassword) {
            cpasswordMsg('Passwords Do not Same');
        }
        else {
            return true;
        }
    }

    const HandleInsert = () => {
        passwordMsg("");
        cpasswordMsg("");
        AllMsg("");
        // setMsg("");

        if (validate()) {
            const data = {
                email: email,
                password: password,
                cpassword: cpassword
            }

            axios.post('http://127.0.0.1:8000/change', data)
                .then(navigate('/login'));
        }
    }

    // const changeName = (e) => {
    //     setName(e.target.value);
    // }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setpassword(e.target.value);
    }
    const changeCpassword = (e) => {
        setcpassword(e.target.value);
    }

    return (
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black">
                        <div class="card-body p-md-5 main">
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <div className="container">
                                        <div className="mx-1 mx-md-4 insert">
                                        <h2 className='text-success ml-5'>Change Password</h2><br/>
                                            <p className='text-danger all'>{errorAll}</p>
                                            {/* <p className='text-danger all'>{msg}</p> */}
                                            {/* <div className="form-group mx-5">
                                                <label>Name </label>
                                                <input type="text" className="form-control" name="name" placeholder='name' onChange={changeName} value={name} />
                                            </div> */}
                                            <div className="form-group mx-5">
                                                <label>Email </label>
                                                <input type="text" className="form-control" name="email" placeholder='Email' onChange={changeEmail} value={email} />
                                                <p className='text-danger'>{errorEmail}</p>
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>New Password </label>
                                                <input type="password" className="form-control" name="password" placeholder='New Password' onChange={changePassword} value={password} />
                                                <p className='text-danger'>{errorPassword}</p>
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>Confirm New Password </label>
                                                <input type="password" className="form-control" name="cpassword" placeholder='Confirm New Password' onChange={changeCpassword} value={cpassword} />
                                                <p className='text-danger'>{errorCpassword}</p>
                                            </div>

                                            <button className="btn btn-outline-primary col-md-6 mx-5" onClick={HandleInsert}>Submit</button>
                                        </div>
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


export default Passwordchange;