import React from 'react';
import './Events.css';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Events () {

    return (
        <>
            <Navbar />
            <div className="events-page">
                <h1>Events</h1>
                <p className='test'>this is some text</p>
            </div>
            <Footer />
        </>
    );
}

export default Events;