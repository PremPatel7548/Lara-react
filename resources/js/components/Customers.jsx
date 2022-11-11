import React,{Component} from 'react';
import axios from 'axios';
import { BrowserRouter, Link } from 'react-router-dom';

class Customers extends Component {
    constructor()
    {
        super();
        this.state={
            Customers:[]
        };
    }

    componentDidMount()
    {
        axios.get("http://127.0.0.1:8000/customers")
        .then(response=>{this.setState({Customers:response.data});
    });
    }
    render()
    {
        return (
            <table className="table bg-dark text-white mt-4">
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>Customer Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.Customers.map(customer=>{
                            return(
                                <tr>
                                    <td>{customer.custID}</td>
                                    <td>{customer.custName}</td>
                                    <td>{customer.City}</td>
                                    {/* <td><Link className='btn btn-outline-warning' to="/edit">Edit</Link></td>
                                    <td><Link className='btn btn-danger' to="/delete">Delete</Link></td> */}
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