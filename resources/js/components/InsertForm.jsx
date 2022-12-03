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

function InsertForm() {
    const [zip,setZip] = useState('')
    const [typemaster,setTypemaster] = useState('')
    const [primary_city,setPrimary_city] = useState('')
    const [state,setState] = useState('')
    const [county,setCounty] = useState('')
    const [timezone,setTimezone] = useState('')
    const [area_code,setArea_code] = useState('')
    const [latitude,setLatitude] = useState('')
    const [longitude,setLongitude] = useState('')
    const [irs_estimated_population,setIrs_estimated_population] = useState('')

    const navigate = useNavigate();

    const HandleInsert = ()=>{
        const data = {
            zip:zip,
            typemaster:typemaster,
            primary_city:primary_city,
            state:state,
            county:county,
            timezone:timezone,
            area_code:area_code,
            latitude:latitude,
            longitude:longitude,
            irs_estimated_population:irs_estimated_population
        }

        axios.post('http://127.0.0.1:8000/insertmaster',data)
        .then(navigate('/zipmaster'));
    }

    const changeZip = (e) =>{
        setZip(e.target.value);
    }
    const changeTypemaster = (e) =>{
        setTypemaster(e.target.value);
    }
    const changePrimary_city = (e) =>{
        setPrimary_city(e.target.value);
    }
    const changeState = (e) =>{
        setState(e.target.value);
    }
    const changeCounty = (e) =>{
        setCounty(e.target.value);
    }
    const changeTimezone = (e) =>{
        setTimezone(e.target.value);
    }
    const changeArea_code = (e) =>{
        setArea_code(e.target.value);
    }
    const changeLatitude = (e) =>{
        setLatitude(e.target.value);
    }
    const changeLongitude = (e) =>{
        setLongitude(e.target.value);
    }
    const changeIrs_estimated_population = (e) =>{
        setIrs_estimated_population(e.target.value);
    }

    return (
        <div className="container">
            <form action="" method="post" className="col-md-7 mt-4 bg-dark text-white row">
                <div className="form-group mx-5">
                    <label>Zip </label>
                    <input type="text" className="form-control" name="zip" placeholder='Zip' onChange={changeZip} value={zip}/>
                </div>

                <div className="form-group mx-5">
                    <label>Type </label>
                    <input type="text" className="form-control" name="typemaster" placeholder='Type' onChange={changeTypemaster} value={typemaster}/>
                </div>
                
                <div className="form-group mx-5">
                    <label>Primary city </label>
                    <input type="text" className="form-control" name="primary_city" placeholder='Primary City' onChange={changePrimary_city} value={primary_city}/>
                </div>

                <div className="form-group mx-5">
                    <label>State </label>
                    <input type="text" className="form-control" name="state" placeholder='State' onChange={changeState} value={state}/>
                </div>

                <div className="form-group mx-5">
                    <label>County </label>
                    <input type="text" className="form-control" name="county" placeholder='County' onChange={changeCounty} value={county}/>
                </div>

                <div className="form-group mx-5">
                    <label>Timezone </label>
                    <input type="text" className="form-control" name="timezone" placeholder='Timezone' onChange={changeTimezone} value={timezone}/>
                </div>

                <div className="form-group mx-5">
                    <label>Area code </label>
                    <input type="text" className="form-control" name="area_code" placeholder='Area Code' onChange={changeArea_code} value={area_code}/>
                </div>

                <div className="form-group mx-5">
                    <label>Latitude </label>
                    <input type="text" className="form-control" name="latitude" placeholder='Latitude' onChange={changeLatitude} value={latitude}/>
                </div>

                <div className="form-group mx-5">
                    <label>Longitude </label>
                    <input type="text" className="form-control" name="longitude" placeholder='Longitude' onChange={changeLongitude} value={longitude}/>
                </div>

                <div className="form-group mx-5">
                    <label>Irs estimated population </label>
                    <input type="text" className="form-control" name="irs_estimated_population" placeholder='Irs Estimated Population' onChange={changeIrs_estimated_population} value={irs_estimated_population}/>
                </div>

                <button className="btn btn-outline-primary col-md-6 mx-5" onClick={HandleInsert}>Add</button>
            </form>
        </div>
    )
}


export default InsertForm;

