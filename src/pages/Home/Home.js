import React from 'react';
import './Home.css'
import { NavLink } from 'react-router-dom'

// TODO: 
// - add a picture 

// hover animation: https://www.google.com/search?client=firefox-b-d&q=css+underline+text+on+hover

function Home () {

    return (
        <>
            <div className="home">
                <div className="main-text">
                    <p> RYERSON </p>
                    <p> PROPULSION </p>
                    <p> GROUP </p>
                </div>

                <NavLink className='linkToMission' to='/Mission' >
                    <p>
                        Check out our mission
                    </p>
                </NavLink>

                <NavLink className='linkToContactUs' to='/ContactUs' >
                    <p >
                        Contact us here
                    </p>
                </NavLink>
            </div>
        </>
    );
}

export default Home;