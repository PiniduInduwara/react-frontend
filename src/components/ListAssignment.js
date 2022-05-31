import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/Home.css';
import AssignmentService from '../services/AssignmentService'


const Assignment = props => (
    <tr>
        <td>{props.assignment.id}</td>
        <td>{props.assignment.asgTitle}</td>
        <td>{props.assignment.instrName}</td>
        <td>{props.assignment.stdName}</td>
        <td>{props.assignment.status}</td>

        <td>
            <Link to={"/update-assignment/" + props.assignment.id}>Update</Link> | <a href="#" id='dlt' onClick={() => { props.deleteAssignment(props.assignment.id) }}>delete</a>
        </td>
    </tr>
)

class ListAssignment extends Component {

    constructor(props) {
        super(props);

        this.deleteAssignment = this.deleteAssignment.bind(this);

        this.state = { assignment: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/assignment')
            .then(response => {
                this.setState({ assignment: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteAssignment(id) {
        axios.delete('http://localhost:8080/assignment/' + id)
            .then(res => console.log(res.data));

        this.setState({
            assignment: this.state.assignment.filter(sml => sml.id !== id)
        })
    }

    ListAssignment(){
        return this.state.assignment.map(currentassignment=>{
            return <Assignment assignment={currentassignment} deleteAssignment={this.deleteAssignment} key={currentassignment.id}/>;

        })
    }

    render() {
        return (
            <div >
                <div className="manageAssignment">
                <h3>Assignment Deatils</h3></div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Assignment Title</th>
                            <th>Instructor Name</th>
                            <th>Student Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.ListAssignment()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListAssignment
