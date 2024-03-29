import React, { useState,useEffect,Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import VisibilityIcon from '@mui/icons-material/Visibility';

// function ZipChildSearch(){
//     const[zipchilds,setZipchilds] = useState([]);
//     const[search,setSearch] = useState("");

//     useEffect(() => {
//         axios.get("http://127.0.0.1:8000/zipchild")
//         .then(response=>{
//             setZipchilds(response.data.data);
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
//                             <th>Zip</th>
//                             <th>City</th>
//                             <th>State</th>
//                             <th>HomeSale</th>
//                             <th>HomeBaseValue</th>
//                             <th>HomeMaxValue</th>
//                             <th>MedianListPrice</th>
//                             <th>MedianSoldPrice</th>
//                             <th>Year</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             zipchilds.filter(zipchild=>
//                                 zipchild.Zip.toString().toLowerCase().includes(search)||
//                                 zipchild.City.toLowerCase().includes(search)||
//                                 zipchild.State.toLowerCase().includes(search)||
//                                 zipchild.HomeSale.toString().toLowerCase().includes(search)||
//                                 zipchild.HomeBaseValue.toString().toLowerCase().includes(search)||
//                                 zipchild.HomeMaxValue.toString().toLowerCase().includes(search)||
//                                 zipchild.MedianListPrice.toString().toLowerCase().includes(search)||
//                                 zipchild.MedianSoldPrice.toString().toLowerCase().includes(search)||
//                                 zipchild.Year.toString().toLowerCase().includes(search))
//                             .map(zipchild=>{
//                                 return (
//                                     <tr key={zipchild.Zip}>
//                                         <td>{zipchild.Zip}</td>
//                                         <td>{zipchild.City}</td>
//                                         <td>{zipchild.State}</td>
//                                         <td>{zipchild.HomeSale}</td>
//                                         <td>{zipchild.HomeBaseValue}</td>
//                                         <td>{zipchild.HomeMaxValue}</td>
//                                         <td>{zipchild.MedianListPrice}</td>
//                                         <td>{zipchild.MedianSoldPrice}</td>
//                                         <td>{zipchild.Year}</td>
//                                         <td><Link class="btn btn-warning" to={`/showchild/${zipchild.Zip}`}>Show</Link></td>
//                                     </tr>
//                                 )
//                             })
//                         }
//                     </tbody>
//                     </table>
//         </div>
//     );
// }

class ZipChildSearch extends Component {
    constructor() {
        super();
        this.state = {
            zipchilds: [],
            search : "",
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 5
        }
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        axios.post("http://127.0.0.1:8000/searchChild",this.state.search)
            .then(response => {
                this.setState({
                    zipchilds: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page
                });
            });
    }

    handlePageChange(pageNumber) {
        console.log('active page is ${pageNumber}');
        // this.setState({ activePage: pageNumber });
        axios.get("http://127.0.0.1:8000/zipchild?page=" + pageNumber)
            .then(response => {
                this.setState({
                    zipchilds: response.data.data,
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
                        {/* {
                            this.state.zipchilds.filter(zipchild=>
                                zipchild.Zip.toString().toLowerCase().includes(this.state.search)||
                                zipchild.City.toLowerCase().includes(this.state.search)||
                                zipchild.State.toLowerCase().includes(this.state.search)||
                                zipchild.City.includes(this.state.search)||
                                zipchild.State.includes(this.state.search)||
                                zipchild.HomeSale.toString().toLowerCase().includes(this.state.search)||
                                zipchild.HomeBaseValue.toString().toLowerCase().includes(this.state.search)||
                                zipchild.HomeMaxValue.toString().toLowerCase().includes(this.state.search)||
                                zipchild.MedianListPrice.toString().toLowerCase().includes(this.state.search)||
                                zipchild.MedianSoldPrice.toString().toLowerCase().includes(this.state.search)||
                                zipchild.Year.toString().toLowerCase().includes(this.state.search)
                                ).map(zipchild => {
                                return (
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
                                        <td><Link class="btn btn-outline-warning" to={`/showchild/${zipchild.Zip}`}><VisibilityIcon /></Link></td>
                                    </tr>
                                )
                            })
                        } */}
                        {
                            this.state.zipchilds.map(zipchild => {
                                return (
                                    <tr key={zipchild.Zip}>
                                        <td>{zipchild.Zip}</td>
                                        <td>{zipchild.City}</td>
                                        <td>{zipchild.State}</td>
                                        <td>{zipchild.HomeSale}</td>
                                        <td>{zipchild.HomeBaseValue}</td>
                                        <td>{zipchild.HomeMaxValue}</td>
                                        <td>{zipchild.MedianListPrice}</td>
                                        <td>{zipchild.MedianSoldPrice}</td>
                                        <td>{zipchild.Year}</td>
                                        <td><Link class="btn btn-outline-warning" to={`/showchild/${zipchild.Zip}`}><VisibilityIcon /></Link></td>
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

export default ZipChildSearch;
