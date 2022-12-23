import React,{Component} from 'react';
import { BrowserRouter, Routes, Link, Route, matchPath, useParams,useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './Header';

class Index extends Component {
    render()
    {
        return (
            <BrowserRouter>

            <div className="col-md-12 row justify-content-center">
                    <Header />
                    <div className="col-md-8">
                        <div className="card">

                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
