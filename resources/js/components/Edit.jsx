import React,{Component,useState,useEffect} from 'react';
import axios from 'axios';
import {useParams,Link,useNavigate} from 'react-router-dom';

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

function Edit()
{
    // const [data, setData] = useState([])
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



    let listParam  = useParams();

    const navigate =useNavigate();


    const handleUpdate = () => {
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
        axios.post('http://127.0.0.1:8000/edit/'+listParam.id,data)
        .then(navigate('/zipmaster')
            // setName(Response.data.name)
            // setCity(Response.data.city)
            // console.log(Response);
            // setData({name:Response.data.custName,city:Response.data.City});
        );
    }

    // console.log(listParam.id);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/edit/'+listParam.id)
        .then(Response => {
            setZip(Response.data.zip)
            setTypemaster(Response.data.type)
            setPrimary_city(Response.data.primary_city)
            setState(Response.data.state)
            setCounty(Response.data.county)
            setTimezone(Response.data.timezone)
            setArea_code(Response.data.area_code)
            setLatitude(Response.data.latitude)
            setLongitude(Response.data.longitude)
            setIrs_estimated_population(Response.data.irs_estimated_population)
            // console.log(Response);
            // setData({name:Response.data.custName,city:Response.data.City});
        });
    },[])



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


    // console.log(props);
    // console.log(this.props);



        return (
            <div className="container">
                            <form action="" method="post" className="col-md-7 mt-4 bg-dark text-white row">
                <div className="form-group mx-5">
                    <label>Zip </label>
                    <input type="text" className="form-control" name="zip" onChange={changeZip} value={zip}/>
                </div>

                <div className="form-group mx-5">
                    <label>Type </label>
                    <input type="text" className="form-control" name="typemaster" onChange={changeTypemaster} value={typemaster}/>
                </div>
                
                <div className="form-group mx-5">
                    <label>Primary_city </label>
                    <input type="text" className="form-control" name="primary_city" onChange={changePrimary_city} value={primary_city}/>
                </div>

                <div className="form-group mx-5">
                    <label>State </label>
                    <input type="text" className="form-control" name="state" onChange={changeState} value={state}/>
                </div>

                <div className="form-group mx-5">
                    <label>County </label>
                    <input type="text" className="form-control" name="county" onChange={changeCounty} value={county}/>
                </div>

                <div className="form-group mx-5">
                    <label>Timezone </label>
                    <input type="text" className="form-control" name="timezone" onChange={changeTimezone} value={timezone}/>
                </div>

                <div className="form-group mx-5">
                    <label>Area_code </label>
                    <input type="text" className="form-control" name="area_code" onChange={changeArea_code} value={area_code}/>
                </div>

                <div className="form-group mx-5">
                    <label>Latitude </label>
                    <input type="text" className="form-control" name="latitude" onChange={changeLatitude} value={latitude}/>
                </div>

                <div className="form-group mx-5">
                    <label>Longitude </label>
                    <input type="text" className="form-control" name="longitude" onChange={changeLongitude} value={longitude}/>
                </div>

                <div className="form-group mx-5">
                    <label>Irs_estimated_population </label>
                    <input type="text" className="form-control" name="irs_estimated_population" onChange={changeIrs_estimated_population} value={irs_estimated_population}/>
                </div>

                <button className="btn btn-outline-warning col-md-6 mx-5" onClick={handleUpdate}>Update</button>
            </form>
            </div>
        );

}


export default Edit;
