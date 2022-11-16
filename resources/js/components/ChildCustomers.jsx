import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ChildCustomers extends Component {
    constructor()
    {
        super();
        this.state={
            zipchilds:[]
        };
    }

    componentDidMount()
    {
        axios.get("http://127.0.0.1:8000/zipchild")
        .then(response=>{this.setState({zipchilds:response.data});
    });
    }

    onDelete(customer_id)
    {
        axios.delete('http://127.0.0.1:8000/deletechild/'+customer_id)
        .then(response=>{

            var zipchilds = this.state.zipchilds;

            for(var i=0;i<zipchilds.length;i++)
            {
                if(zipchilds[i].Zip == customer_id)
                {
                    zipchilds.splice(i,1);
                    this.setState({zipchilds:zipchilds});
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
                            <Link className="btn btn-outline-primary" to="/insertchild">Add</Link>
                        </th>
                    </tr>
                    <tr>
                        <th>Zip</th>
                        <th>City</th>
                        <th>State</th>
                        <th>HomeSale</th>
                        <th>HomeBaseValue</th>
                        <th>HomeMaxValue</th>
                        <th>MedianListPrice</th>
                        <th>MedianSoldPrice</th>
                        <th>Year</th>                     
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.zipchilds.map(zipchild=>{
                            return(
                                <tr>
                                    <td>{zipchild.Zip}</td>
                                    <td>{zipchild.City}</td>
                                    <td>{zipchild.State}</td>
                                    <td>{zipchild.HomeSale}</td>
                                    <td>{zipchild.HomeBaseValue}</td>
                                    <td>{zipchild.HomeMaxValue}</td>
                                    <td>{zipchild.MedianListPrice}</td>
                                    <td>{zipchild.MedianSoldPrice}</td>
                                    <td>{zipchild.Year}</td>
                                    <td><Link class="btn btn-outline-warning" to={`/editchild/${zipchild.Zip}`}>Edit</Link>
                                        <a href="#" onClick={this.onDelete.bind(this,zipchild.Zip)}><button className="btn btn-outline-danger mx-2">Delete</button></a></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default ChildCustomers;