import React, { useState,useEffect,Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import VisibilityIcon from '@mui/icons-material/Visibility';

// function ZipMasterSearch(){
//     const[zipmasters,setZipmasters] = useState([]);
//     const[search,setSearch] = useState("");

//     useEffect(() => {
//         axios.get("http://127.0.0.1:8000/zipmaster")
//         .then(response=>{
//             setZipmasters(response.data.data);
//         })
//     },[]);

//     return(
//         <div>
//             <div className='col-md-4 mt-3'>
//                 <input type="text" className='bg-dark text-white' name="search" onChange={(e)=>setSearch(e.target.value)} placeholder="Search"></input>
//             </div>
//            <table className="table bg-dark text-white mt-2 text-center">
//                     <thead>
//                         <tr>
//                         <th>Zip</th>
//                             <th>Type</th>
//                             <th>PrimaryCity</th>
//                             <th>State</th>
//                             <th>County</th>
//                             <th>Timezone</th>
//                             <th>AreaCode</th>
//                             <th>Latitude</th>
//                             <th>Longitude</th>
//                             <th>Irs_Estimated_Population</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             zipmasters.filter(zipmaster=>
//                                 zipmaster.zip.toString().toLowerCase().includes(search)||
//                                 zipmaster.type.toLowerCase().includes(search)||
//                                 zipmaster.primary_city.toLowerCase().includes(search)||
//                                 zipmaster.state.toLowerCase().includes(search)||
//                                 zipmaster.county.toLowerCase().includes(search)||
//                                 zipmaster.timezone.toLowerCase().includes(search)||
//                                 zipmaster.area_code.toString().toLowerCase().includes(search)||
//                                 zipmaster.latitude.toString().toLowerCase().includes(search)||
//                                 zipmaster.longitude.toString().toLowerCase().includes(search)||
//                                 zipmaster.irs_estimated_population.toString().toLowerCase().includes(search))
//                             .map(zipmaster=>{
//                                 return (
//                                     <tr key={zipmaster.zip}>
//                                         <td>{zipmaster.zip}</td>
//                                         <td>{zipmaster.type}</td>
//                                         <td>{zipmaster.primary_city}</td>
//                                         <td>{zipmaster.state}</td>
//                                         <td>{zipmaster.county}</td>
//                                         <td>{zipmaster.timezone}</td>
//                                         <td>{zipmaster.area_code}</td>
//                                         <td>{zipmaster.latitude}</td>
//                                         <td>{zipmaster.longitude}</td>
//                                         <td>{zipmaster.irs_estimated_population}</td>
//                                         <td><Link class="btn btn-warning" to={`/showmaster/${zipmaster.zip}`}>Show</Link></td>
//                                     </tr>
//                                 )
//                             })
//                         }
//                     </tbody>
//                     </table>
//         </div>
//     );
// }

class ZipMasterSearch extends Component {
    constructor() {
        super();
        this.state = {
            zipmasters: [],
            search : "",
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed:5
        }
        this.handlePageChange=this.handlePageChange.bind(this);
    }

    componentDidMount() {
            axios.get("http://127.0.0.1:8000/zipmaster")
                .then(response => {
                    this.setState({
                        zipmasters: response.data.data,
                        itemsCountPerPage: response.data.per_page,
                        totalItemsCount: response.data.total,
                        activePage: response.data.current_page
                    });
                });
    }

    onDelete(customer_id) {
        var d=confirm("Are You Sure Delete This Record");
        if(d  == true)
        {
        axios.delete('http://127.0.0.1:8000/delete/' + customer_id)
            .then(response => {

                var zipmasters = this.state.zipmasters;

                for (var i = 0; i < zipmasters.length; i++) {
                    if (zipmasters[i].zip == customer_id) {
                        zipmasters.splice(i, 1);
                        this.setState({ zipmasters: zipmasters });
                    }
                }
            });
        }
    }


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
                 <div className='col-md-4 mt-3'>
                <input type="text" className='bg-dark text-white' name="search" onChange={(e)=>this.setState({search : e.target.value})} placeholder="Search"></input>
            </div>
                <table className="table bg-dark text-white mt-1 text-center">
                    <thead>
                        <tr>
                            <th>Zip</th>
                            <th>Type</th>
                            <th>PrimaryCity</th>
                            <th>State</th>
                            <th>County</th>
                            <th>Timezone</th>
                            <th>AreaCode</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                            <th>Irs_Estimated_Population</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.zipmasters.filter(zipmaster=>
                                zipmaster.zip.toString().toLowerCase().includes(this.state.search)||
                                zipmaster.type.toLowerCase().includes(this.state.search)||
                                zipmaster.primary_city.toLowerCase().includes(this.state.search)||
                                zipmaster.state.toLowerCase().includes(this.state.search)||
                                zipmaster.county.toLowerCase().includes(this.state.search)||
                                zipmaster.type.includes(this.state.search)||
                                zipmaster.primary_city.includes(this.state.search)||
                                zipmaster.state.includes(this.state.search)||
                                zipmaster.county.includes(this.state.search)||
                                zipmaster.timezone.toString().toLowerCase().includes(this.state.search)||
                                zipmaster.area_code.toString().toLowerCase().includes(this.state.search)||
                                zipmaster.latitude.toString().toLowerCase().includes(this.state.search)||
                                zipmaster.longitude.toString().toLowerCase().includes(this.state.search)||
                                zipmaster.irs_estimated_population.toString().toLowerCase().includes(this.state.search)
                                ).map(zipmaster => {
                                return (
                                    <tr key={zipmaster.zip}>
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
                                        <td><Link class="btn btn-outline-warning" to={`/showmaster/${zipmaster.zip}`}><VisibilityIcon /></Link></td>
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

export default ZipMasterSearch;
