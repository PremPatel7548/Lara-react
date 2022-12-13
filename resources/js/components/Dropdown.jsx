import React, { Component,useState,useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Link, Route, matchPath, useParams,useNavigate } from 'react-router-dom';
import user from './images/Userimage.png';
import "./style1.css";

function Dropdown(){
    const Menus = ['Profile','Setting','Logout'];
    const [open,setOpen] = useState(false);

    //solution
    const menuRef = useRef();
    const imgRef = useRef();

    window.addEventListener('click',(e)=>{
        if(e.target !== menuRef.current && e.target !== imgRef.current)
        {
            setOpen(false);
        }
    });
    return (
        <div>
            <div className='relative'>
                <img
                ref={imgRef}
                onClick={()=>setOpen(!open)}
                src = {user}
                alt = "user"
                className="h-20 w-20 object-cover border-4 border-gray-400 rounded-full cursor-pointer"
                height="50px"
                width="50px"
                />
                {
                    open &&
                <div ref={menuRef} className='bg-white text-dark p-4 w-52 shadow-lg absolute -left-14 top-24'>
                    <ul>
                        {
                            Menus.map((menu)=>(
                                <li
                                onClick={()=>setOpen(false)}
                                className='p-2 text-lg cursor-pointer rounded hoverclass' key={menu}>
                                    {menu}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                }
            </div>
        </div>
    )
}

export default Dropdown;
