import React, { Component,useState,useEffect } from 'react';
import { BrowserRouter, Routes, Link, Route, matchPath, useParams,useNavigate } from 'react-router-dom';
import InsertForm from './InsertForm';
import InsertChild from './InsertChild';
import Home from './Home';
import Userhome from './Userhome';
import Edit from './Edit';
import Signup from './Signup';
import EditChild from './EditChild';
import Login from './Login';
import AdminZipmaster from './Adminzipmaster';
import AdminzipChild from './Adminzipchild';

function Header() {
    const [loggedin,setloggedin] = useState(false);


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
                <div className="container">
                    <nav className="navbar navbar-expand-sm navbar-light bg-secondary text-white">
                        <a className="navbar-brand text-white" href="/">Navbar</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                {
                                   sessionStorage.getItem('user') == "Admin"?
                                <li className="nav-item active">
                                    <Link className="nav-link text-white" to="/home">Home <span className="sr-only">(current)</span></Link>
                                </li>: <li className="nav-item active">
                                    <Link className="nav-link text-white" to="/userhome"> User Home <span className="sr-only">(current)</span></Link>
                                </li>
                                }
                                {
                                    sessionStorage.getItem('user') == "Admin"?
                                    <div className='row'>

                                <li className="nav-item">
                                    <Link className="nav-link text-white ml-3" to="/Adminzipmaster">zipMaster</Link>
                                    </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/Adminzipchild">zipChild</Link>
                                </li>
                                        </div>:
                                <li className="nav-item">
                                <Link className="nav-link text-white" to="/Adminzipchild">User Table</Link>
                               </li>
                                }

                            </ul>
                            <div className="form-inline my-2 my-lg-0">
                                {
                                    !sessionStorage.getItem('user')?
                                    <div>
                                    <Link class="btn btn-outline-success my-2 my-sm-0 ml-2 mr-2 text-white" to={'/login'}>Login</Link>
                                    <Link class="btn btn-outline-success my-2 my-sm-0 text-white" to={'/signup'}>SignUp</Link>
                                    </div>:
                                    <button class="btn btn-outline-success my-2 my-sm-0 text-white" onClick={logout}>Logout</button>

                                }
                            </div>
                        </div>
                    </nav>
                <Routes>
                    <Route exact path="/Home" element={<Home />} />
                    <Route exact path="/userhome" element={<Userhome />} />
                    <Route exact path="/Adminzipmaster" element={<AdminZipmaster />} />
                    <Route exact path="/Adminzipchild" element={<AdminzipChild />} />

                    <Route exact path="/edit/:id" element={<Edit />} />
                    <Route exact path="/editchild/:id" element={<EditChild />} />
                    <Route exact path="/insertmaster" element={<InsertForm />} />
                    <Route exact path="/insertchild" element={<InsertChild />} />
                    <Route exact path="/signup" element={<Signup />}/>
                    <Route exact path="/login" element={<Login />}/>
                    {/* <Route exact path="/edit/:id" element={(matchProps)=> <Edit {...matchProps}{...this.props} /> }/> */}
                </Routes>
                </div>
        );
    }

export default Header;
