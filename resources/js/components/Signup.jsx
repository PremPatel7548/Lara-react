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
    const [errorName, nameMsg] = useState('');
    const [errorPassword, passwordMsg] = useState('');
    const [errorCpassword, cpasswordMsg] = useState('');
    const [errorEmail,emailMsg] = useState('');
    const [errorAll,AllMsg] = useState('');

    const navigate = useNavigate();

    const validate = () => {

        if (name == '' || email == '' || password == ''|| cpassword == '') {
            AllMsg('Please Fill All Field');
        }
        else if(!email.includes('@') && email.length < 12)
        {
            emailMsg('please Enter Valid Email');
        }
        else if (name.length < 2) {
            nameMsg('Name Atlease 2 Character');
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


        nameMsg("");
        passwordMsg("");
        cpasswordMsg("");
        AllMsg("");

        if (validate()) {

            const data = {
                name: name,
                email: email,
                password: password
            }

            axios.post('http://127.0.0.1:8000/signup', data)
                .then(navigate('/'));
        }
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
      <div className='formsignup'>

        <h1>Sign Up</h1>
          <p className='text-danger all'>{errorAll}</p>
        <div class="info">
          <input class="fname" type="text" name="name" placeholder="Name" className='text-dark' onChange={changeName} value={name}/>
          <p className='text-danger'>{errorName}</p>
          <input type="text" name="email" placeholder="Email" className='text-dark'onChange={changeEmail} value={email}/>
          <p className='text-danger'>{errorEmail}</p>
          <input type="password" name="password" placeholder="Password" className='text-dark' onChange={changePassword} value={password}/>
          <p className='text-danger'>{errorPassword}</p>
          <input type="password" name="cpassword" placeholder="Confirm Password" className='text-dark' onChange={changeCpassword} value={cpassword}/>
          <p className='text-danger'>{errorCpassword}</p>


          <div className="loginlink">
            <Link className="nav-link text-primary size-20" to="/login"> Already have a account?</Link>
            </div>
        </div>
        <button type="submit" className='btn btn-danger col-md-11 mx-2' onClick={HandleInsert}>Sign Up</button>
      </div>
    </div>

    );
}

export default Header;
