import React from 'react';
import teamPhoto from '../TheTeam/team_photo.jpg';

import '../TheTeam/TheTeam.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function TheTeam () {

    return (
        <>
            <Navbar />
            <div className="the-team">
                <h1>The Whole RPG Family</h1>
                <h1>Many members</h1>
                <img className='main-image' src={teamPhoto} alt='Logo' />
            </div>
            <Footer />
        </>
    );
}

export default TheTeam;