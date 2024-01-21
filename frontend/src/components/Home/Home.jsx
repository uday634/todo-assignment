import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='home d-flex justify-content-center align-items-center'>
            <div className='container d-flex justify-content-center align-items-center flex-column'>
                <h1 className='home-title text-center'>Try Todo List</h1>
                <img className='home-img' src='https://imgs.search.brave.com/3g2FoffPmrDSm42NWTDa4hw0oaRP093VPMcF3mRwwrU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNS9Xb3Jr/LVBORy1GaWxlLnBu/Zw' alt='Home Image' />
                <button className='home-btn p-2'> Make ToDo List</button>
            </div>
        </div>
    );
};

export default Home;
