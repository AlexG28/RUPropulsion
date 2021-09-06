import React from 'react';
import teamPhoto from '../TheTeam/team_photo.jpg';

import '../TheTeam/TheTeam.css';

function TheTeam () {

    return (
        <div className="the-team">
            <h1>The Team</h1>
            <h1>Many members</h1>
            <img className='main-image' src={teamPhoto} alt='Logo' />

            <div className="bivdev">
                <h2>Business Development</h2>
                <h3>1) Finance Subteam</h3>
                <br/>
                <p>The Finance team manages RPG's account by collecting, processing, tracking, and reimbursing team funds, as well asusing business strategies for a cost-friendly creation of a rocket engine. Currently, the Finance team is working on creating a financial plan that will maximize every dollar in our budget.</p>
                <br/>
                <h3>Leads</h3>
                <div className="financeImgs"></div>
                <h3>Team Members</h3>
                <div className="fiteamImgs"></div>
                <h3>2) Legal Subteam</h3>
                <p>The Legal team is drafting a legally enforceable Confidential Information and Intellectual Property (CIIP) Agreement, analyzing appropriate guidelines and criteria for constructing a rocket testing facility, and examining the rocketry industry's safety standards and compliances. Currently, Legal is conducting an in-depth research on regulatory and legal matters pertaining to space-related activities. </p>
                <h3>Leads</h3>
                <div className="legalImages"></div>
                <h3>3) Outreach Subteam</h3>
                <p>The Outreach team is responsible for contacting stakeholders, securing sponsorships, recruiting students, as well as keeping the general student body updated on RPG's activities and events. At the moment, the Outreach team is working on improving RPG's methods of contacting sponsors, and also working on an upcoming RPG event before Fall 2021.</p>
                <h3>4) Social Media Team</h3>
                <p>The Social Media team is responsible for maintaining RPG's professional online presence through visually appealing graphics that keep students and sponsors informed about any and all of RPG's team accomplishments. The Social Media team is currently focusing on improving the content and visuals for RPG's posts.</p>
                <div className="socialImages"></div>
                <h3>5) Website Subteam</h3>
                <p>The Website team is responsible for creating RPG's website to include all the information to keep students and sponsors informed about RPG’s team mission, past and upcoming events, social media platforms and for anyone to reach the team with any questions they may have. Currenlty, the Website subteam is currently focusing on updating the blog and adding new upcoming events to the RPG's website.</p>
                <div className="websiteImages"></div>
            </div>
        
            <div className="Propellant">
                <h3>Propellant Management</h3>
                <p>The Propellant Management team mainly deals with the design and analysis of the pressurized propellant systems of the rocket engine. Through the study of fluid dynamics, thermodynamics, mechanisms and vibrations, the team designs the systems according to the requirements to operate the rocket engine safely and successfully. 
The team oversees the following sub-systems: 1. Nitrous and Ethanol fill system, 2. Pressure Feed system, 3. Pressure Vessel system and 4. Propellant Feed system. The purpose of these systems is to deliver the fuel and oxidizer to the combustion chamber of the rocket engine at the required pressure and flow rate. Currently, the Propellant Management team has been designing a custom cavitating venturi to create an independent upper and lower stream flow, while also collecting data for future RPG rocket engine iterations. At the moment, the team has been contacting appropriate cavitating venturi manufacturers, and researching efficient methods for cooling and insulating oxidizers; while preparing for in-person flow testing.</p>
                <h3>Leads</h3>
                <div class="propellImgs">
                </div>
                <h3>Combustion Dynamics</h3>
                <p>The Combustion Dynamics team is responsible for designing the combustion chamber, cooling system, nozzle, injector, and test stand of the rocket engine. This design process is complex and requires consideration of gas dynamics, stress and heat transfer, as well as sufficient knowledge of industry standard manufacturing practices. Currently, the team is referring to outside experts to help in designing the safest and easiest engine to manufacture. Once this is done, the team plans to static-test a steel Ethanol-N2O rocket engine in time for the Launch Canada competition. The team also plans to conduct cold-flow tests of our engine components using our in-house SLA 3D printer and fluid flow, stress and combustion simulations of our engine models using Solidworks and ANSYS before the competition. After Launch Canada, the team plans to experiment with different engine types, materials and manufacturing methods to produce a flight-weight engine.</p>
                <h3>Leads:</h3>
                <div className="combustionImages"></div>
                <h3>Transfer and Control</h3>
                <p>1) Software Subteam</p>
                <p>The Software team is responsible for programming the valves and sensors to move the propellant from the pressure vessels to the engine by electro-mechanical means. The primary focus  is to make a GUI interface to monitor and control the components using radio communication. Currently, the software team is in the process of developing this interface and additional security features to automate the process of maintaining all hardware components.</p>
                <p>2) Hardware Substeam</p>
                <p>The Hardware team is responsible for making a ground station that shows the sensor data and firing sequence progress in the custom GUI to ensure that the rocket engine can be fired remotely. Currently, the team has been working on an igniter circuit using nichrome-60 to ensure that the wires heat up enough to fire the propellant without burning up.</p>
            </div>
        </div>
    );
}

export default TheTeam;