import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Customers extends Component {
    constructor()
    {
        super();
        this.state={
            zipmasters:[]
        };
    }

    componentDidMount()
    {
        axios.get("http://127.0.0.1:8000/zipmaster")
        .then(response=>{this.setState({zipmasters:response.data});
    });
    }

    onDelete(customer_id)
    {
        axios.delete('http://127.0.0.1:8000/delete/'+customer_id)
        .then(response=>{

            var zipmasters = this.state.zipmasters;

            for(var i=0;i<zipmasters.length;i++)
            {
                if(zipmasters[i].zip == customer_id)
                {
                    zipmasters.splice(i,1);
                    this.setState({zipmasters:zipmasters});
                }
            }
        });
    }
    render()
    {
        return (
            <table className="table bg-dark text-white mt-4">
                <thead>
                    <tr>
                        <th>
                            <Link className="btn btn-outline-primary" to="/insertmaster">Add</Link>
                        </th>
                    </tr>
                    <tr>
                        <th>zip</th>
                        <th>type</th>
                        <th>primary_city</th>
                        <th>state</th>
                        <th>county</th>
                        <th>timezone</th>
                        <th>area_code</th>
                        <th>latitude</th>
                        <th>longitude</th>
                        <th>irs_estimated_population</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.zipmasters.map(zipmaster=>{
                            return(
                                <tr>
                                    <td>{zipmaster.zip}</td>
                                    <td>{zipmaster.type}</td>
                                    <td>{zipmaster.primary_city}</td>
                                    <td>{zipmaster.state}</td>
                                    <td>{zipmaster.county}</td>
                                    <td>{zipmaster.timezone}</td>
                                    <td>{zipmaster.area_code}</td>
                                    <td>{zipmaster.latitude}</td>
                                    <td>{zipmaster.longitude}</td>
                                    <td>{zipmaster.irs_estimated_population}</td>
                                    <td><Link class="btn btn-outline-warning" to={`/edit/${zipmaster.zip}`}>Edit</Link>
                                        <a href="#" onClick={this.onDelete.bind(this,zipmaster.zip)}><button className="btn btn-outline-danger mx-2">Delete</button></a></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Customers;
