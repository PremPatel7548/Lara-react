import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "./style.css";

//import ReactDOM from 'react-dom';

function Header() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const [msg,setMsg] = useState('');

    const navigate = useNavigate();

    const validate = () =>{

        // if(name =='' || email =='' ||  password =='' || cpassword == '')
        // {
        //     setMsg('Please Full Fill the Form');
        //     navigate('/signup');
        // }
        // else
        // {
        //     HandleInsert();
        // }

        if(password == cpassword)
        {
            HandleInsert();
        }
        else
        {
            alert('Passwords Do not Match');
            navigate('/');
        }
    }

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


    // return (
    //     <div>
    //         <form className="col-md-5 mt-4 bg-dark text-white SignupForm" method='post'>

    //             <h2 className='text-white my-2'>SignUp</h2>

    //             <div class="form-group my-2">
    //                 <label for="Username">Username</label>
    //                 <input type="text" class="form-control" name="name" onChange={changeName} value={name} required={true}/>
    //             </div>

    //             <div class="form-group">
    //                 <label for="Email">Email</label>
    //                 <input type="email" class="form-control" name="email" onChange={changeEmail} value={email} />
    //             </div>

    //             <div class="form-group">
    //                 <label for="">Password</label>
    //                 <input type="password" class="form-control" name="password" onChange={changePassword} value={password} required={true}/>
    //             </div>

    //             <div class="form-group">
    //                 <label for="">Confirm Password</label>
    //                 <input type="password" class="form-control" name="cpassword" onChange={changeCpassword} value={cpassword} required={true}/>
    //             </div>

    //             <button class="btn btn-success my-3" onClick={validate}>Sign Up</button>
    //         </form>
    //     </div>
    // );

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
          <input class="fname" type="text" name="name" placeholder="Full name" className='text-dark' />
          <input type="text" name="name" placeholder="Email" className='text-dark'/>
          <input type="text" name="name" placeholder="Phone number" className='text-dark' />
          <input type="text" name="name" placeholder="Website" className='text-dark' />
        </div>
        <p>Message</p>
        <div>
          <textarea rows="4"></textarea>
        </div>
        <button type="submit" className='btn btn-danger'>Sign Up</button>
      </form>
    </div>
    );
}

export default Header;