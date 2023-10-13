import React from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <div className="header">
          <h1>Welcome to Your Dashboard</h1>
        </div>
        <div className="dashboard">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default Home;