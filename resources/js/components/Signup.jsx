import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';
import "./style.css";

//import ReactDOM from 'react-dom';

function Header() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
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

    const HandleInsert = () => {
        const data = {
            name: name,
            email:email,
            password:password
        }

        axios.post('http://127.0.0.1:8000/signup', data)
            .then(navigate('/'));
    }

    const changeName = (e) => {
        setName(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setpassword(e.target.value);
    }
    const changeCpassword = (e) => {
        setcpassword(e.target.value);
    }

    return(
<div class="main-block">
      <div class="left-part">
        <i class="fas fa-envelope"></i>
        <i class="fas fa-at"></i>
        <i class="fas fa-mail-bulk"></i>
      </div>
      <form action="/">
        <h1>Sign Up</h1>
        <div class="info">
          <input class="fname" type="text" name="name" placeholder="Name" className='text-dark' onChange={changeName} value={name}/>
          <input type="email" name="email" placeholder="Email" className='text-dark'onChange={changeEmail} value={email}/>
          <input type="password" name="password" placeholder="Password" className='text-dark' onChange={changePassword} value={password}/>
          <input type="password" name="cpassword" placeholder="Confirm Password" className='text-dark' onChange={changeCpassword} value={cpassword}/>

          <div className="loginlink">
            <Link className="nav-link text-primary size-20" to="/login"> already have a account?</Link>
            </div>
        </div>
        <button type="submit" className='btn btn-danger col-md-11 mx-3' onClick={validate}>Sign Up</button>
      </form>
    </div>
    );
}

export default Header;
