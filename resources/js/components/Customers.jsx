import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Customers extends Component {
    constructor()
    {
        super();
        this.state={
            customers:[]
        };
    }

    componentDidMount()
    {
        axios.get("http://127.0.0.1:8000/customers")
        .then(response=>{this.setState({customers:response.data});
    });
    }

    onDelete(customer_id)
    {
        axios.delete('http://127.0.0.1:8000/delete/'+customer_id)
        .then(response=>{

            var customers = this.state.customers;

            for(var i=0;i<customers.length;i++)
            {
                if(customers[i].custID == customer_id)
                {
                    customers.splice(i,1);
                    this.setState({customers:customers});
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
                            <Link className="btn btn-outline-primary" to="/insert">Add</Link>
                        </th>
                    </tr>
                    <tr>
                        <th>Customer Id</th>
                        <th>Customer Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.customers.map(customer=>{
                            return(
                                <tr>
                                    <td>{customer.custID}</td>
                                    <td>{customer.custName}</td>
                                    <td>{customer.City}</td>
                                    <td><Link class="btn btn-outline-warning" to={`/edit/${customer.custID}`}>Edit</Link>
                                        <a href="#" onClick={this.onDelete.bind(this,customer.custID)}><button className="btn btn-outline-danger mx-2">Delete</button></a></td>
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
