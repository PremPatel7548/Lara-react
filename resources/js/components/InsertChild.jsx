import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./style1.css";

// class InsertForm extends Component {
//     constructor(){
//         super();
//         this.onChangename=this.onChangename.bind(this);
//         this.onChangeCity=this.onChangeCity.bind(this);
//         this.onSubmit=this.onSubmit.bind(this);
//         this.state = {
//             name: '',
//             city:'',
//         };
//     }
//     onChangename(e)
//     {
//         this.setState({
//             name: e.target.value
//         });
//     }

//     onChangeCity(e)
//     {
//         this.setState({
//             city: e.target.value
//         });
//     }

//     onSubmit(e)
//     {
//         e.preventDefault();
//         const user ={
//             name:this.state.name,
//             city:this.state.city
//         }
//         // const user = "name="+this.state.name+"&city="+this.state.city;
//         //var qs = require 'qs';


//         // axios.post('http://127.0.0.1:8000/add',user)
//         // .then(res=>console.log(res.user));

//         //axios.post('http://127.0.0.1:8000/add', qs.stringfy(user))
//         axios.post('http://127.0.0.1:8000/add', user)
//         .then(alert('Customer Record Inserted'));

//     }

//     render()
//     {
//         return (
//             <div className="container">
//                 <form action="" method="post" className="col-md-5 mt-4 bg-dark text-white" onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                         <label>Name :- </label>
//                         <input type="text" className="form-control" name="name" id="n1" onChange={this.onChangename} value={this.state.name}/>
//                     </div>

//                     <div className="form-group">
//                         <label>City :- </label>
//                         <input type="text" className="form-control" name="city" id="p1" onChange={this.onChangeCity}  value={this.state.city}/>
//                     </div>
//                     <button className="btn btn-outline-primary">Add</button>
//                 </form>
//             </div>
//         );
//     }
// }

function InsertChild() {
    const [Zip, setZip] = useState('')
    const [City, setCity] = useState('')
    const [State, setState] = useState('')
    const [HomeSale, setHomeSale] = useState('')
    const [HomeBaseValue, setHomeBaseValue] = useState('')
    const [HomeMaxValue, setHomeMaxValue] = useState('')
    const [MedianListPrice, setMedianListPrice] = useState('')
    const [MedianSoldPrice, setMedianSoldPrice] = useState('')
    const [Year, setYear] = useState('')

    const navigate = useNavigate();

    const HandleInsert = () => {
        const data = {
            Zip: Zip,
            City: City,
            State: State,
            HomeSale: HomeSale,
            HomeBaseValue: HomeBaseValue,
            HomeMaxValue: HomeMaxValue,
            MedianListPrice: MedianListPrice,
            MedianSoldPrice: MedianSoldPrice,
            Year: Year
        }

        axios.post('http://127.0.0.1:8000/insertchild', data)
            .then(navigate('/zipchild'));
    }

    const changeZip = (e) => {
        setZip(e.target.value);
    }
    const changeCity = (e) => {
        setCity(e.target.value);
    }
    const changeState = (e) => {
        setState(e.target.value);
    }
    const changeHomeSale = (e) => {
        setHomeSale(e.target.value);
    }
    const changeHomeBaseValue = (e) => {
        setHomeBaseValue(e.target.value);
    }
    const changeHomeMaxValue = (e) => {
        setHomeMaxValue(e.target.value);
    }
    const changeMedianListPrice = (e) => {
        setMedianListPrice(e.target.value);
    }
    const changeMedianSoldPrice = (e) => {
        setMedianSoldPrice(e.target.value);
    }
    const changeYear = (e) => {
        setYear(e.target.value);
    }

    // return (
    //     <div className="container">
    //         <form action="" method="post" className="col-md-7 mt-4 bg-dark text-white row">
    //             <div className="form-group mx-5">
    //                 <label>Zip </label>
    //                 <input type="text" className="form-control" name="Zip" placeholder='Zip' onChange={changeZip} value={Zip}/>
    //             </div>

    //             <div className="form-group mx-5">
    //                 <label>City </label>
    //                 <input type="text" className="form-control" name="City" placeholder='City' onChange={changeCity} value={City}/>
    //             </div>

    //             <div className="form-group mx-5">
    //                 <label>State </label>
    //                 <input type="text" className="form-control" name="State" placeholder='State' onChange={changeState} value={State}/>
    //             </div>

    //             <div className="form-group mx-5">
    //                 <label>HomeSale </label>
    //                 <input type="text" className="form-control" name="HomeSale" placeholder='Home Sale' onChange={changeHomeSale} value={HomeSale}/>
    //             </div>

    //             <div className="form-group mx-5">
    //                 <label>HomeBaseValue </label>
    //                 <input type="text" className="form-control" name="HomeBaseValue" placeholder='Home Base Value' onChange={changeHomeBaseValue} value={HomeBaseValue}/>
    //             </div>

    //             <div className="form-group mx-5">
    //                 <label>HomeMaxValue </label>
    //                 <input type="text" className="form-control" name="HomeMaxValue" placeholder='Home Max Value' onChange={changeHomeMaxValue} value={HomeMaxValue}/>
    //             </div>

    //             <div className="form-group mx-5">
    //                 <label>MedianListPrice </label>
    //                 <input type="text" className="form-control" name="MedianListPrice" placeholder='Median List Price' onChange={changeMedianListPrice} value={MedianListPrice}/>
    //             </div>

    //             <div className="form-group mx-5">
    //                 <label>MedianSoldPrice </label>
    //                 <input type="text" className="form-control" name="MedianSoldPrice" placeholder='Median Sold Price' onChange={changeMedianSoldPrice} value={MedianSoldPrice}/>
    //             </div>

    //             <div className="form-group mx-5">
    //                 <label>Year </label>
    //                 <input type="text" className="form-control" name="Year" placeholder='YYYY' onChange={changeYear} value={Year}/>
    //             </div>

    //             <button className="btn btn-outline-primary col-md-6 mx-5" onClick={HandleInsert}>Add</button>
    //         </form>
    //     </div>
    // )

    return (
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black">
                        <div class="card-body p-md-5 main">
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <div className="container">
                                        <form action="" method="post" className="mx-1 mx-md-4 insert">
                                            <div className="form-group mx-5">
                                                <label>Zip </label>
                                                <input type="text" className="form-control" name="Zip" placeholder='Zip' onChange={changeZip} value={Zip} />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>City </label>
                                                <input type="text" className="form-control" name="City" placeholder='City' onChange={changeCity} value={City} />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>State </label>
                                                <input type="text" className="form-control" name="State" placeholder='State' onChange={changeState} value={State} />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>HomeSale </label>
                                                <input type="text" className="form-control" name="HomeSale" placeholder='Home Sale' onChange={changeHomeSale} value={HomeSale} />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>HomeBaseValue </label>
                                                <input type="text" className="form-control" name="HomeBaseValue" placeholder='Home Base Value' onChange={changeHomeBaseValue} value={HomeBaseValue} />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>HomeMaxValue </label>
                                                <input type="text" className="form-control" name="HomeMaxValue" placeholder='Home Max Value' onChange={changeHomeMaxValue} value={HomeMaxValue} />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>MedianListPrice </label>
                                                <input type="text" className="form-control" name="MedianListPrice" placeholder='Median List Price' onChange={changeMedianListPrice} value={MedianListPrice} />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>MedianSoldPrice </label>
                                                <input type="text" className="form-control" name="MedianSoldPrice" placeholder='Median Sold Price' onChange={changeMedianSoldPrice} value={MedianSoldPrice} />
                                            </div>

                                            <div className="form-group mx-5">
                                                <label>Year </label>
                                                <input type="text" className="form-control" name="Year" placeholder='YYYY' onChange={changeYear} value={Year} />
                                            </div>

                                            <button className="btn btn-outline-primary col-md-6 mx-5" onClick={HandleInsert}>Add</button>
                                        </form>
                                    </div>


                                </div>
                                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                        id='i1' alt="Sample image" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default InsertChild;

