import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

// class Edit extends Component {
//     constructor(props){
//         super(props);
//         this.onChangename=this.onChangename.bind(this);
//         this.onChangeCity=this.onChangeCity.bind(this);
//         this.onSubmit=this.onSubmit.bind(this);
//         this.state = {
//             name:'',
//             city:''
//         }
//     }
//     componentDidMount()
//     {
//         console.log(this.props);
//         // axios.get("http://127.0.0.1:8000/edit/"+this.props.match.params.custID)
//         // .then((response)=>{
//         //     console.log(response);
//         //     this.setState({name:response.data.custName,city:response.data.City});
//         // });
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
//         // axios.post('http://127.0.0.1:8000/', user)
//         // .then(alert("Inserted"));

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

function EditChild() {
    // const [data, setData] = useState([])
    const [Zip, setZip] = useState('')
    const [City, setCity] = useState('')
    const [State, setState] = useState('')
    const [HomeSale, setHomeSale] = useState('')
    const [HomeBaseValue, setHomeBaseValue] = useState('')
    const [HomeMaxValue, setHomeMaxValue] = useState('')
    const [MedianListPrice, setMedianListPrice] = useState('')
    const [MedianSoldPrice, setMedianSoldPrice] = useState('')
    const [Year, setYear] = useState('')



    let listParam = useParams();

    const navigate = useNavigate();


    const handleUpdate = () => {
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
        axios.post('http://127.0.0.1:8000/editchild/' + listParam.id, data)
            .then(navigate('/zipchild')
                // setName(Response.data.name)
                // setCity(Response.data.city)
                // console.log(Response);
                // setData({name:Response.data.custName,city:Response.data.City});
            );
    }

    // console.log(listParam.id);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/editchild/' + listParam.id)
            .then(Response => {
                setZip(Response.data.Zip)
                setCity(Response.data.City)
                setState(Response.data.State)
                setHomeSale(Response.data.HomeSale)
                setHomeBaseValue(Response.data.HomeBaseValue)
                setHomeMaxValue(Response.data.HomeMaxValue)
                setMedianListPrice(Response.data.MedianListPrice)
                setMedianSoldPrice(Response.data.MedianSoldPrice)
                setYear(Response.data.Year)
                // console.log(Response);
                // setData({name:Response.data.custName,city:Response.data.City});
            });
    }, [])



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


    // console.log(props);
    // console.log(this.props);



    return (
        <div className="container">
            <form action="" method="post" className="col-md-7 mt-4 bg-dark text-white row">
                <div className="form-group mx-5">
                    <label>Zip </label>
                    <input type="text" className="form-control" name="Zip" onChange={changeZip} value={Zip} />
                </div>

                <div className="form-group mx-5">
                    <label>City </label>
                    <input type="text" className="form-control" name="City" onChange={changeCity} value={City} />
                </div>

                <div className="form-group mx-5">
                    <label>State </label>
                    <input type="text" className="form-control" name="State" onChange={changeState} value={State} />
                </div>

                <div className="form-group mx-5">
                    <label>HomeSale </label>
                    <input type="text" className="form-control" name="HomeSale" onChange={changeHomeSale} value={HomeSale} />
                </div>

                <div className="form-group mx-5">
                    <label>HomeBaseValue </label>
                    <input type="text" className="form-control" name="HomeBaseValue" onChange={changeHomeBaseValue} value={HomeBaseValue} />
                </div>

                <div className="form-group mx-5">
                    <label>HomeMaxValue </label>
                    <input type="text" className="form-control" name="HomeMaxValue" onChange={changeHomeMaxValue} value={HomeMaxValue} />
                </div>

                <div className="form-group mx-5">
                    <label>MedianListPrice </label>
                    <input type="text" className="form-control" name="MedianListPrice" onChange={changeMedianListPrice} value={MedianListPrice} />
                </div>

                <div className="form-group mx-5">
                    <label>MedianSoldPrice </label>
                    <input type="text" className="form-control" name="MedianSoldPrice" onChange={changeMedianSoldPrice} value={MedianSoldPrice} />
                </div>

                <div className="form-group mx-5">
                    <label>Year </label>
                    <input type="text" className="form-control" name="Year" onChange={changeYear} value={Year} />
                </div>

                <button className="btn btn-outline-warning col-md-6 mx-5" onClick={handleUpdate}>Update</button>
            </form>
        </div>
    );

}


export default EditChild;
