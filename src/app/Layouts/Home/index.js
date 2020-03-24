import React from 'react';
import Profile from '../../../data/profile'

function Home(){
    return(
        <div className="home">
            <img className="position-absolute m-auto" src={Profile.photo} alt="profile"></img>
            <h1 className="display-1 fixed-bottom m-5">{Profile.name}</h1>
        </div>
    )
}
export default Home;