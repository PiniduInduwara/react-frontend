import React, { Component } from 'react'
import AssignmentService from '../services/AssignmentService'

class ViewAssignment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            assignment: {}
        }
    }

    componentDidMount(){
        AssignmentService.getAssignmentById(this.state.id).then( res => {
            this.setState({assignment: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Assignment Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Assignment ID: </label>
                            <div> { this.state.assignment.id }</div>
                        </div>
                        <div className = "row">
                            <label>Assignment Title: </label>
                            <div> { this.state.assignment.title }</div>
                        </div>
                        <div className = "row">
                            <label> Instructor Name: </label>
                            <div> { this.state.assignment.instrName }</div>
                        </div>
                        <div className = "row">
                            <label> Student Name: </label>
                            <div> { this.state.assignment.studentName }</div>
                        </div>
                        <div className = "row">
                            <label> Status: </label>
                            <div> { this.state.assignment.status }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewAssignment
