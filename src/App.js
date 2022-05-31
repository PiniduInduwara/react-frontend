import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListAssignment from './components/ListAssignment';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateAssignment from './components/CreateAssignment';
import ViewStatus from './components/ViewStatus';
import  UpdateAssignment from './components/UpdateAssignment';
import ViewAssignment from './components/ViewAssignment';
import ChangeStatus from './components/ChangeStatus';
import Home from './components/Home';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {Home}></Route>
                          <Route path = "/assignemnt" component = {ListAssignment}></Route>
                          <Route path = "/add-assignment/:id" component = {CreateAssignment}></Route>
                          <Route path = "/view-assignment/:id" component = {ViewAssignment}></Route>
                          <Route path = "/update-assignment/" component = { UpdateAssignment}></Route>
                          <Route path = '/ViewStatus' component={ViewStatus}></Route>
                          <Route path = '/ChangeStatus' component={ChangeStatus}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
