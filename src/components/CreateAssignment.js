import React, { Component } from 'react'
import useState from 'react-hook-use-state';
import reactIs from 'react-is';
import AssignmentService from '../services/AssignmentService';
import axios from 'axios';

const initialState ={
    id: '',
    asgTitle: '',
    instrName: '',
    stdName: '',
    status:'',
    idErr:'',
    asgTitleErr: '',
    instrNameErr: '',
    stdNameErr: '',
    statusErr:''
}


class CreateAssignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            asgTitle: '',
            instrName: '',
            stdName: '',
            status:''
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeInstrNameHandler = this.changeInstrNameHandler.bind(this);
        this.changeStudentNameHander = this.changeStudentNameHander.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

  
    state = initialState;

    changeIdHandler= (event) => {
        this.setState({id: event.target.value});

        
        // const [Id,setId]= useState("");
    
        //     if(Id.length<6 || Id.length>8){
        //         alert("Valid ID")
        //     }
        //     else{
        //         alert("ID should be more than 6 characters and less thna 8 characters")
        //     }
    
        //     event.preventDefault()
        
    }
    changeTitleHandler= (event) => {
        this.setState({asgTitle: event.target.value});
    }

    changeInstrNameHandler= (event) => {
        this.setState({instrName: event.target.value});
    }

    changeStudentNameHander= (event) => {
        this.setState({stdName: event.target.value});
    }

    changeStatusHandler= (event) =>{
        this.setState({status: event.target.value});
    }

    //Validation
    validate = () =>{
        let idErr = "";
        let asgTitleErr="";
        let instrNameErr="";
        let stdNameErr = "";
        let statusErr="";

        if(!this.state.id){
            idErr = "id is required"
        }
        if(!this.state.id){
            asgTitleErr = "Assignment Title is required"
        }
        if(!this.state.id){
            instrNameErr = "Instructor Name is required"
        }
        if(!this.state.id){
            stdNameErr = "Student Name is required"
        }
        if(!this.state.id){
            statusErr = "Status is required"
        }

        // if(!this.state.id.length<6 || this.state.id.length>8){
        //         alert("Valid ID")
        // }
        // else{
        //         alert("ID should be more than 6 characters and less thna 8 characters")
        // }

        if (idErr || asgTitleErr || instrNameErr || stdNameErr || statusErr) {
            this.setState({ idErr, asgTitleErr, instrNameErr, stdNameErr, statusErr });
            return false;
          }

        return true;
    };


    onSubmit=event=> {
        event.preventDefault();

        axios.post('http://localhost:8080/assignment', {
                id: this.state.id,
                asgTitle: this.state.asgTitle,
                instrName: this.state.instrName,
                stdName: this.state.stdName,
                status: this.state.status
        })
        .then(response => { 
	            console.log(response)
                alert("Create successfully");
        })
        .catch(error => {
                console.log(error.response)
        });

        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
        }

    }



    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3>CREATE NEW ASSIGNEMNT</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Assignment ID: </label>
                                            <input placeholder="Assignment ID" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler}/>

                                               <div style={{ fontSize: 12, color: "red" }}>
                                                    {this.state.idErr}</div>
                                        </div>

                                        <div className = "form-group">
                                            <label> Assignment Title: </label>
                                            <input placeholder="Assignment Title" name="title" className="form-control" 
                                                value={this.state.asgTitle} onChange={this.changeTitleHandler}/>
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                    {this.state.asgTitleErr}</div>
                                        </div>

                                        <div className = "form-group">
                                            <label> Instructor Name: </label>
                                            <input placeholder="Instructor Name" name="instrName" className="form-control" 
                                                value={this.state.instrName} onChange={this.changeInstrNameHandler}/>
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                    {this.state.instrNameErr}</div>
                                        </div>

                                        <div className = "form-group">
                                            <label> Student Name: </label>
                                            <input placeholder="Student Name" name="stdName" className="form-control" 
                                                value={this.state.stdName} onChange={this.changeStudentNameHander}/>
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                    {this.state.stdNameErr}</div>
                                        </div>

                                        <div className = "form-group">
                                            <label> Status: </label>
                                            <input placeholder="Status" name="status" className="form-control" 
                                                value={this.state.statusErr} onChange={this.changeStatusHandler}/>
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                    {this.state.statusErr}</div>
                                        </div>
                                        
                                        
                                        <button className="btn btn-success"  onClick={this.onSubmit}>Create</button>
                                       
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateAssignment
