import React from 'react';
import './Home.css'


// TODO: 
// - add a picture 

function Home () {

    return (
        <div className="home">
            
            <div className="main-text">
                <p> RYERSON </p>
                <p> PROPULSION </p>
                <p> GROUP </p>
            </div>

            <div className = 'summary'>
                <p className = 'summary-title'> Fueling our future</p>
                <p className = 'summary-paragraph'>
                    Ryerson Propulsion group is a <br></br>
                    student deisng team aiming to design, build<br></br>
                    and test a liquid bipropellant rocket engine.<br></br>
                    RPG consits of members from every engineering <br></br>
                    discipline working on the complex challenges of a <br></br>
                    rocket engine.
                </p>
            </div>
            <p> @RyersonPropulsionGroup2021 </p>
        </div>
    );
}

export default Home;