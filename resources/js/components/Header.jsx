import React,{Component} from 'react';
import {BrowserRouter,Routes,Link,Route} from 'react-router-dom';
import InsertForm from './InsertForm';
import Home  from './Home';

class Header extends Component {
    render(){
        return (
            <BrowserRouter>
            <div className="container">
               <nav className="navbar navbar-expand-sm navbar-light bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/insertform">Form</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
               </nav>
            </div>
            <Routes>
            <Route exact path="/Home" element={<Home />}/>      
            <Route exact path="/insertform" element={<InsertForm />}/>      
            </Routes>
            </BrowserRouter>
        );
    }
}

export default Header;
