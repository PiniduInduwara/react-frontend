import React, { Component } from 'react'
import AssignmentService from '../services/AssignmentService';
import axios from 'axios';

class ChangeStatus extends Component {
    constructor(props) {
        super(props)

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            status:''
        }
    }

    componentDidMount(){

        console.log(window.location.href)

        const url = window.location.href
        const id = url.split("/").pop()
        console.log(id);

        this.setState({
            id:id
        })

        axios.get('http://localhost:8080/status/'+ id)
             .then(response =>{
                 this.setState({
                    id: response.data.id,
                    status: response.data.status,
                 })
             })
             .catch(function (error) {
                console.log(error);
            })
    }
    
    
    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }


    changeStatusHandler= (event) =>{
        this.setState({status: event.target.value});
    }

    
    onSubmit=event=> {
        event.preventDefault();

        const assignment ={
            id: this.state.id,
            status: this.state.status
        }

        console.log(assignment);

        axios.put('http://localhost:8080/status/'+this.state.id, assignment)
             .then(res => console.log(res.data));

        window.location = '/';


    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Change Status</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Assignment ID: </label>
                                            <input placeholder="Assignment ID" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Status: </label>
                                            <input placeholder="Status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changeStatusHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.onSubmit}>Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default ChangeStatus
