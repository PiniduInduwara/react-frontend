import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AssignmentService from '../services/AssignmentService'


const Assignment = props => (
    <tr>
        <td>{props.assignment.id}</td>
        <td>{props.assignment.status}</td>

        <td>
            <Link to={"/ChangeStatus/" + props.assignment.id}>Update</Link> 
        </td>
    </tr>
)

class ViewStatus extends Component {

    constructor(props) {
        super(props);

        // this.deleteAssignment = this.deleteAssignment.bind(this);

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

    // deleteAssignment(id) {
    //     axios.delete('http://localhost:8080/assignment/' + id)
    //         .then(res => console.log(res.data));

    //     this.setState({
    //         assignment: this.state.assignment.filter(sml => sml.id !== id)
    //     })
    // }

    ViewStatus(){
        return this.state.assignment.map(currentassignment=>{
            return <Assignment assignment={currentassignment} key={currentassignment.id}/>;

        })
    }

    render() {
        return (
            <div>
                <div className="manageAssignment">
                <h3>Status</h3></div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.ViewStatus()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ViewStatus
