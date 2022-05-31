import React, { Component } from 'react'
import axios from 'axios';

class UpdateAssignment extends Component {
    constructor(props) {
        super(props)

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeInstrNameHandler = this.changeInstrNameHandler.bind(this);
        this.changeStudentNameHander = this.changeStudentNameHander.bind(this);
        // this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            asgTitle: '',
            instrName: '',
            stdName: '',
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
        axios.get('http://localhost:8080/assignment/'+ id)
             .then(response =>{
                 this.setState({
                    id : response.data.id,
                    asgTitle: response.data.asgTitle,
                    instrName: response.data.instrName,
                    stdName: response.data.stdName ,
                 })
             })
             .catch(function (error) {
                console.log(error);
            })
    }
    
    
    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }

    changeTitleHandler= (event) => {
        this.setState({asgTitle: event.target.value});
    }

    changeInstrNameHandler= (event) => {
        this.setState({instrName: event.target.value});
    }

    changeStudentNameHander= (event) =>{
        this.setState({stdName: event.target.value});
    }

    // changeStatusHandler= (event) =>{
    //     this.setState({status: event.target.value});
    // }

    
    onSubmit=event=> {
        event.preventDefault();

        const assignment ={
            id: this.state.id,
            asgTitle: this.state.asgTitle,
            instrName: this.state.instrName,
            stdName: this.state.stdName,
            // status: this.state.status
        }

        console.log(assignment);

        axios.put('http://localhost:8080/assignment/'+this.state.id, assignment)
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
                                <h3 className="text-center">Update Assignment</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Assignment ID: </label>
                                            <input placeholder="Assignment ID" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Assignment Title: </label>
                                            <input placeholder="Assignment Title" name="asgTitle" className="form-control" 
                                                value={this.state.asgTitle} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Instructor Name: </label>
                                            <input placeholder="Instructor Name" name="instrName" className="form-control" 
                                                value={this.state.instrName} onChange={this.changeInstrNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Student Name: </label>
                                            <input placeholder="Student Name" name="stdName" className="form-control" 
                                                value={this.state.stdName} onChange={this.changeStudentNameHander}/>
                                        </div>
                                        {/* <div className = "form-group">
                                            <label> Status: </label>
                                            <input placeholder="Status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changeStatusHandler}/>
                                        </div> */}

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

export default UpdateAssignment
