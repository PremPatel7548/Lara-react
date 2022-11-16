import React, { Component } from 'react';
import { BrowserRouter, Routes, Link, Route, matchPath, useParams } from 'react-router-dom';
import InsertForm from './InsertForm';
import Home from './Home';
import Customers from './Customers';
import Edit from './Edit';
import Signup from './Signup';

class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <nav className="navbar navbar-expand-sm navbar-light bg-dark text-white">
                        <a className="navbar-brand text-white" href="/">Navbar</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link text-white" to="/home">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/customers">Customers</Link>
                                </li>
                            </ul>
                            <div className="form-inline my-2 my-lg-0 mx-2">
                                <Link class="btn btn-outline-success text-white mx-2" to={'/signup'}>SignUp</Link>
                                <button class="btn btn-outline-success my-2 my-sm-0" >Login</button>
                            </div>
                        </div>
                    </nav>
                </div>
                <Routes>
                    <Route exact path="/Home" element={<Home />} />
                    <Route exact path="/customers" element={<Customers />} />
                    <Route exact path="/edit/:id" element={<Edit />} />
                    <Route exact path="/insert" element={<InsertForm />} />
                    <Route exact path="/signup" element={<Signup />}/>
                    {/* <Route exact path="/edit/:id" element={(matchProps)=> <Edit {...matchProps}{...this.props} /> }/> */}
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Header;
