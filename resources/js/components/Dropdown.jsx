import React, { Component, useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Link, Route, matchPath, useParams, useNavigate } from 'react-router-dom';
import user from './images/Userimage.png';
import "./style1.css";
import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';

function Dropdown() {
    const Menus = ['Profile', 'Setting', 'Logout'];
    const [open, setOpen] = useState(false);

    //solution
    const menuRef = useRef();
    const imgRef = useRef();

    window.addEventListener('click', (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false);
        }
    });

    const navigate = useNavigate();
    const logout = () =>
    {
        var user=sessionStorage.getItem('user');
        console.log(user);
          if(user)
          {
             var r = confirm("Sure You want to Logout");
            if(r == true)
            {
                sessionStorage.clear();
                navigate('/userhome');
            }

          }
    }
    return (
        <div>
            <div className='relative'>
                <img
                    ref={imgRef}
                    onClick={() => setOpen(!open)}
                    src={user}
                    alt="user"
                    className="h-20 w-20 object-cover border-4 border-gray-400 rounded-full cursor-pointer"
                    height="50px"
                    width="50px"
                />
                {
                    open &&
                    <div ref={menuRef} className='dropdown bg-white text-dark p-4 w-52 shadow-lg absolute -left-14 top-24'>
                        <ul>
                            <li
                                onClick={() => setOpen(false)}
                                className='p-2 text-lg cursor-pointer rounded profile hoverclass'>
                                <Person2Icon /> Profile
                            </li>
                            <li
                                onClick={() => setOpen(false)}
                                className='p-2 text-lg cursor-pointer profile rounded hoverclass mt-2'>
                               <SettingsIcon /> Setting
                            </li>
                            <li
                                onClick={() => setOpen(false)}
                                className='p-2 text-lg cursor-pointer profile rounded hoverclass mt-2' onClick={logout}>
                                <LogoutIcon /> Logout
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Dropdown;
