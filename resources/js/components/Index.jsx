import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

class Index extends Component {
    render()
    {
        return (
            <div className="container">
                <Header />
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}