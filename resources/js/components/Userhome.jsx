import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';

class Userhome extends Component {
    constructor() {
        super();
        this.state = {
            zipmasters: [],
            search:'',
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed:5
        }
        this.handlePageChange=this.handlePageChange.bind(this);
        this.onsearch=this.onsearch.bind(this);
        this.ontype=this.ontype.bind(this);
    }

    onsearch()
    {
        const data={
            search:this.state.search
        };
        axios.post("http://127.0.0.1:8000/search",data)
        .then(response=>{this.setState({
            zipmasters: response.data.data,
            itemsCountPerPage: response.data.per_page,
            totalItemsCount: response.data.total,
            activePage: response.data.current_page
        })});
    }

    ontype(e)
    {
        this.setState({
            search:e.target.value
        });
    }
    // componentDidMount() {
    //         axios.get("http://127.0.0.1:8000/zipmaster")
    //             .then(response => {
    //                 this.setState({
                        // zipmasters: response.data.data,
                        // itemsCountPerPage: response.data.per_page,
                        // totalItemsCount: response.data.total,
                        // activePage: response.data.current_page
    //                 });
    //             });
    // }


    // "per_page" = 20;
    // "total" = 20000;
    // "current_page" = 1;
    handlePageChange(pageNumber) {
        console.log('active page is ${pageNumber}');
        // this.setState({ activePage: pageNumber });
        axios.get("http://127.0.0.1:8000/zipmaster?page="+pageNumber)
            .then(response => {
                this.setState({
                    zipmasters: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page
                });
            });
    }

    render() {
        return (
            <div>

                <div>
                   <input type='text' name='search' className='col-md-4 text-dark' onChange={this.ontype} value={this.state.search}/>
                   <button className='btn btn-warning' onClick={this.onsearch}>Search</button>
                </div>

                <table className="table bg-dark text-white mt-4 text-center">
                    <thead>
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
                            this.state.zipmasters.map(zipmaster => {
                                return (
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
                                        <td >{zipmaster.irs_estimated_population}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div class="d-flex justify-content-center">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={this.handlePageChange}
                        itemClass='page-item'
                        linkClass='page-link'
                        // itemsCountPerPage={20}
                        // totalItemsCount={10000}
                        // pageRangeDisplayed={5}
                        // onChange={this.handlePageChange}
                        // itemClass='page-item'
                        // linkClass='page-link'
                    />
                </div>
            </div>
        )
    }
}

export default Userhome;
