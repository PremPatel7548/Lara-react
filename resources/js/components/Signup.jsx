import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
//import ReactDOM from 'react-dom';

function Header() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const navigate = useNavigate();

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


    return (
        <div>
            <form class="bg-dark text-white mt-4" method='post'>

                <div class="form-group ">
                    <label for="Username">Username</label>
                    <input type="text" class="form-control" name="name" onChange={changeName} value={name} />
                </div>

                <div class="form-group">
                    <label for="Email">Email</label>
                    <input type="email" class="form-control" name="email" onChange={changeEmail} value={email} />
                </div>

                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" class="form-control" name="password" onChange={changePassword} value={password} />
                </div>

                <div class="form-group">
                    <label for="">Confirm Password</label>
                    <input type="password" class="form-control" name="cpassword" onChange={changeCpassword} value={cpassword} />
                </div>

                <button class="btn btn-success" onClick={HandleInsert}>Sign Up</button>
            </form>
        </div>
    );
}

export default Header;
