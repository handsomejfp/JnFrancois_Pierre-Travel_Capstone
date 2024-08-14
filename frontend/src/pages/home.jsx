import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
    const [state, setState] = useState('');
    const [activities, setActivities] = useState([]);

    const fetchActivities = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/travel/${state}`);
            setActivities(response.data);
        } catch (error) {
            console.error('Error fetching activities', error);
        }
    };

    return (
        <div className="home-container">
            <h1 className="title">Explore the Best Activities in Your State</h1>
            <input 
                type="text" 
                value={state} 
                onChange={(e) => setState(e.target.value)} 
                placeholder="Enter state" 
                className="state-input"
            />
            <button onClick={fetchActivities} className="search-button">Search</button>
            <ul className="activity-list">
                {activities.map((activity, index) => (
                    <li key={index} className="activity-item">{activity}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
