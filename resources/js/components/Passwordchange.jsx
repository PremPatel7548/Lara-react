import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./style1.css";
import { constant } from 'lodash';

function Passwordchange() {
    //const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    const [oldPassword, setOldpassword] = useState('')
    const [newPassword, setNewpassword] = useState('')
    const [errorPassword, passwordMsg] = useState('');
    const [errorCpassword, cpasswordMsg] = useState('');
    // const [error,Msg] = useState('');
    const [errorAll, AllMsg] = useState('');
    // const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    const validate = () => {
        if (oldPassword == '' || newPassword == '') {
            AllMsg('Please Fill All Field');
        }
        else if (newPassword.length < 7) {
            passwordMsg('Password Atleast 8 Character');
        }
        else if (oldPassword == newPassword) {
            cpasswordMsg('Please Enter New Password');
        }
        else {
            return true;
        }
    }

    const HandleChangePassword = () => {
        passwordMsg("");
        cpasswordMsg("");
        AllMsg("");
        // setMsg("");

        if (validate()) {
            const data = {
                email : sessionStorage.getItem('email'),
                oldPassword : oldPassword,
                newPassword: newPassword
            }

            axios.post('http://127.0.0.1:8000/change', data)
                .then(response=>response.data == false?AllMsg("Old Password is Not Correct"):navigate('/login'));
        }
    }

    // const changePassword = () =>
    // {
    //     if(sessionStorage.getItem('user') == "Admin")
    //     {
    //         navigate('/home');
    //     }
    //     else
    //     {
    //         navigate('/userhome');
    //     }
    // }

    // const changeName = (e) => {
    //     setName(e.target.value);
    // }
    // const changeEmail = (e) => {
    //     setEmail(e.target.value);
    // }
    const changeOldPassword = (e) => {
        setOldpassword(e.target.value);
    }
    const changeNewpassword = (e) => {
        setNewpassword(e.target.value);
    }



    return(

        <div class="main-block">
              <div className="left-part">
                <i className="fas fa-envelope"></i>
                <i className="fas fa-at"></i>
                <i className="fas fa-mail-bulk"></i>
              </div>
              <div className='formlogin'>
                <h1>Reset Password</h1>
                <h4 className='text-danger'>{errorAll}</h4><br/>
                <div className="info">

                  <input type="password" name="oldPassword" placeholder="Old Password" className='text-dark' onChange={changeOldPassword} value={oldPassword}/>
                  <p className='text-danger'>{errorPassword}</p>
                  <input type="password" name="newPassword" placeholder="New Password" className='text-dark' onChange={changeNewpassword} value={newPassword}/>
                  <p className='text-danger'>{errorCpassword}</p>

                </div>
                <button type="submit" className='btn btn-danger col-md-11 mx-2' onClick={HandleChangePassword} >Reset</button>
            </div>
              </div>

            );

}


export default Passwordchange;
