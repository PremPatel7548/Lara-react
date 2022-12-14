import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Link, Route, matchPath, useParams, Navigate } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import "./style.css";

//import ReactDOM from 'react-dom';

function Login() {
    //const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    //const [cpassword, setcpassword] = useState('')
    const [msg,setMsg] = useState('');

    const navigate = useNavigate();

    // const validate = () =>{

    //     if(name =='' || email =='' ||  password =='' || cpassword == '')
    //     {
    //         setMsg('Please Full Fill the Form');
    //         navigate('/signup');
    //     }
    //     else
    //     {
    //         HandleInsert();
    //     }

    //     if(password == cpassword)
    //     {
    //         HandleInsert();
    //     }
    //     else
    //     {
    //         alert('Passwords Do not Match');
    //         navigate('/');
    //     }
    // }

    const HandleLogin = () => {
        const data = {
            //name: name,
            email:email,
            password:password
        }

        axios.post('http://127.0.0.1:8000/logindata',data)
        .then(Response => Response.data == "" ? setMsg("Invalid Email Or Password") : checkuser(Response.data))

    }

    const checkuser = (e) => {
        sessionStorage.setItem('user',e.name);
        sessionStorage.setItem('email',e.email);
        if(sessionStorage.getItem('user') == "Admin")
        {
            navigate('/home');
        }
        else
        {
            navigate('/userhome');
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

    // const changeCpassword = (e) => {
    //     setcpassword(e.target.value);
    // }


    return(
<div class="main-block">
      <div className="left-part">
        <i className="fas fa-envelope"></i>
        <i className="fas fa-at"></i>
        <i className="fas fa-mail-bulk"></i>
      </div>
      <div className='formlogin'>
        <h1>Login</h1>
        <h4 className='text-danger'>{msg}</h4><br/>
        <div className="info">
          {/* <input class="fname" type="text" name="name" placeholder="Name" className='text-dark' onChange={changeName} value={name}/> */}
          <input type="email" name="email" placeholder="Email" className='text-dark' onChange={changeEmail} value={email}/>
          <input type="password" name="password" placeholder="Password" className='text-dark' onChange={changePassword} value={password}/>
          {/* <input type="password" name="cpassword" placeholder="Confirm Password" className='text-dark' onChange={changeCpassword} value={cpassword}/> */}
        </div>

        {/* <Link className="text-primary mx-2" id='l1' to={'/change'}>Change Password</Link> */}
         <div className='signuplink'>
            <Link className="text-primary mx-2" id='l1' to={'/signup'}>New Account</Link>
         </div>
        <button type="submit" className='btn btn-danger col-md-11 mx-2' onClick={HandleLogin} >Login</button>
    </div>
      </div>

    );

}

export default Login;
