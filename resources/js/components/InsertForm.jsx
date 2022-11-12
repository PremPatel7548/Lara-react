import React,{Component} from 'react';

class InsertForm extends Component {
    constructor(){
        super();
        this.onChangename=this.onChangename.bind(this);
        this.onChangeCity=this.onChangeCity.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state = {
            name: '',
            city:'',
        };
    }
    onChangename(e)
    {
        this.setState({
            name: e.target.value
        });
    }

    onChangeCity(e)
    {
        this.setState({
            city: e.target.value
        });
    }

    onSubmit(e)
    {
        e.preventDefault();
        const user ={
            name:this.state.name,
            city:this.state.city
        }
        // const user = "name="+this.state.name+"&city="+this.state.city;
        //var qs = require 'qs';


        // axios.post('http://127.0.0.1:8000/add',user)
        // .then(res=>console.log(res.user));

        //axios.post('http://127.0.0.1:8000/add', qs.stringfy(user))
        axios.post('http://127.0.0.1:8000/add', user)
        .then(alert('Customer Record Inserted'));

    }

    render()
    {
        return (
            <div className="container">
                <form action="" method="post" className="col-md-5 mt-4 bg-dark text-white" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name :- </label>
                        <input type="text" className="form-control" name="name" id="n1" onChange={this.onChangename} value={this.state.name}/>
                    </div>

                    <div className="form-group">
                        <label>City :- </label>
                        <input type="text" className="form-control" name="city" id="p1" onChange={this.onChangeCity}  value={this.state.city}/>
                    </div>
                    <button className="btn btn-outline-primary">Add</button>
                </form>
            </div>
        );
    }
}


export default InsertForm;

