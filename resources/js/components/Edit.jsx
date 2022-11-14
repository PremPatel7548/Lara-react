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
    const [name, setName] = useState('')
    const [city, setCity] = useState('')



    let listParam  = useParams();

    const navigate =useNavigate();


    const handleUpdate = () => {
        const data = {
            name: name,
            city: city
        }
        axios.post('http://127.0.0.1:8000/edit/'+listParam.id,data)
        .then(navigate('/customers')
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
            setName(Response.data.custName)
            setCity(Response.data.City)
            // console.log(Response);
            // setData({name:Response.data.custName,city:Response.data.City});
        });
    },[])



    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }


    // console.log(props);
    // console.log(this.props);



        return (
            <div className="container">
                <form action="" method="post" className="col-md-5 mt-4 bg-dark text-white" >
                    <div className="form-group">
                        <label>Name :- </label>
                        <input type="text" className="form-control" name="name" id="n1" value={name} onChange={handleNameChange}/>
                    </div>

                    <div className="form-group">
                        <label>City :- </label>
                        <input type="text" className="form-control" name="city" id="p1" value={city} onChange={handleCityChange}/>
                    </div>
                    <button className="btn btn-outline-primary" onClick={handleUpdate}>Update</button>
                </form>
            </div>
        );

}


export default Edit;
