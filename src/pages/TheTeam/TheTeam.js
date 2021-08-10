import React from 'react';
import teamPhoto from '../TheTeam/team_photo.jpg';

import '../TheTeam/TheTeam.css';

function TheTeam () {

    return (
        <div className="the-team">
            <h1>The Team</h1>

            <img className='main-image' src={teamPhoto} alt='Logo' />
        </div>
    );
}

export default TheTeam;