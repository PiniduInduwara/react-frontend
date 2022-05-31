import axios from 'axios';
const cors = require("cors")


const ASSIGNMENT_API_BASE_URL = "http://localhost:8080/assignment";

class AssignmentService {

    getAssignment(){
        return axios.get(ASSIGNMENT_API_BASE_URL);
    }

    createAssignment(){
        return axios.post(ASSIGNMENT_API_BASE_URL);
    }

    getAssignmentById(assignmentId){
        return axios.get(ASSIGNMENT_API_BASE_URL + '/' + assignmentId);
    }

    updateAssignment(assignmentId){
        return axios.put(ASSIGNMENT_API_BASE_URL + '/' +assignmentId);
    }

    deleteAssignment(assignmentId){
        return axios.delete(ASSIGNMENT_API_BASE_URL + '/' +assignmentId);
    }
}

export default new AssignmentService()