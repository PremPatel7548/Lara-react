import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

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
    const [Zip,setZip] = useState('')
    const [City,setCity] = useState('')
    const [State,setState] = useState('')
    const [HomeSale,setHomeSale] = useState('')
    const [HomeBaseValue,setHomeBaseValue] = useState('')
    const [HomeMaxValue,setHomeMaxValue] = useState('')
    const [MedianListPrice,setMedianListPrice] = useState('')
    const [MedianSoldPrice,setMedianSoldPrice] = useState('')
    const [Year,setYear] = useState('')

    const navigate = useNavigate();

    const HandleInsert = ()=>{
        const data = {
            Zip:Zip,
            City:City,
            State:State,
            HomeSale:HomeSale,
            HomeBaseValue:HomeBaseValue,
            HomeMaxValue:HomeMaxValue,
            MedianListPrice:MedianListPrice,
            MedianSoldPrice:MedianSoldPrice,
            Year:Year
        }

        axios.post('http://127.0.0.1:8000/insertchild',data)
        .then(navigate('/zipchild'));
    }

    const changeZip = (e) =>{
        setZip(e.target.value);
    }
    const changeCity = (e) =>{
        setCity(e.target.value);
    }
    const changeState = (e) =>{
        setState(e.target.value);
    }
    const changeHomeSale = (e) =>{
        setHomeSale(e.target.value);
    }
    const changeHomeBaseValue = (e) =>{
        setHomeBaseValue(e.target.value);
    }
    const changeHomeMaxValue = (e) =>{
        setHomeMaxValue(e.target.value);
    }
    const changeMedianListPrice = (e) =>{
        setMedianListPrice(e.target.value);
    }
    const changeMedianSoldPrice = (e) =>{
        setMedianSoldPrice(e.target.value);
    }
    const changeYear = (e) =>{
        setYear(e.target.value);
    }

    return (
        <div className="container">
            <form action="" method="post" className="col-md-5 mt-4 bg-dark text-white">
                <div className="form-group">
                    <label>Zip :- </label>
                    <input type="text" className="form-control" name="Zip" onChange={changeZip} value={Zip}/>
                </div>

                <div className="form-group">
                    <label>City :- </label>
                    <input type="text" className="form-control" name="City" onChange={changeCity} value={City}/>
                </div>
                
                <div className="form-group">
                    <label>State :- </label>
                    <input type="text" className="form-control" name="State" onChange={changeState} value={State}/>
                </div>

                <div className="form-group">
                    <label>HomeSale :- </label>
                    <input type="text" className="form-control" name="HomeSale" onChange={changeHomeSale} value={HomeSale}/>
                </div>

                <div className="form-group">
                    <label>HomeBaseValue :- </label>
                    <input type="text" className="form-control" name="HomeBaseValue" onChange={changeHomeBaseValue} value={HomeBaseValue}/>
                </div>

                <div className="form-group">
                    <label>HomeMaxValue :- </label>
                    <input type="text" className="form-control" name="HomeMaxValue" onChange={changeHomeMaxValue} value={HomeMaxValue}/>
                </div>

                <div className="form-group">
                    <label>MedianListPrice :- </label>
                    <input type="text" className="form-control" name="MedianListPrice" onChange={changeMedianListPrice} value={MedianListPrice}/>
                </div>

                <div className="form-group">
                    <label>MedianSoldPrice :- </label>
                    <input type="text" className="form-control" name="MedianSoldPrice" onChange={changeMedianSoldPrice} value={MedianSoldPrice}/>
                </div>

                <div className="form-group">
                    <label>Year :- </label>
                    <input type="text" className="form-control" name="Year" onChange={changeYear} value={Year}/>
                </div>

                <button className="btn btn-outline-primary my-2" onClick={HandleInsert}>Add</button>
            </form>
        </div>
    )
}


export default InsertChild;

