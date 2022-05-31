import React from 'react';
import { NavLink } from 'react-router-dom';
import create from '../images/create.jpg';
import list from '../images/list.png';
import status from '../images/status.png';

import '../css/Home.css';

import { ManageContainer, ManageH1, ManageWrapper, ManageCard, ManageIcon, ManageH2, ManageCardclc } from '../components/HomeElements'



function Home() {
    return (
        <div className="manageAssignment" >
            <h3>Welcome to Pearon</h3>

            <ManageContainer >
                <ManageH1>Select task to continue</ManageH1>
                <ManageWrapper>
                    <ManageCard>
                        <ManageH2>ADD NEW ASSIGNMENT</ManageH2>
                        <ManageIcon src={create} />
                        <h4><NavLink to='/add-assignment/:id'>Continue</NavLink></h4>

                    </ManageCard>
                    <ManageCard>
                        <ManageH2>ASSIGNMENT LIST</ManageH2>
                        <ManageIcon src={list} />
                        <h4><NavLink to='/assignemnt'>Continue</NavLink></h4>

                    </ManageCard>
                    <ManageCard>
                        <ManageH2>MANAGE STATUS</ManageH2>
                        <ManageIcon src={status} />
                        <h4><NavLink to='/ViewStatus'>Continue</NavLink></h4>

                    </ManageCard>
                </ManageWrapper>
            </ManageContainer>


        </div>
    );
}

export default Home;