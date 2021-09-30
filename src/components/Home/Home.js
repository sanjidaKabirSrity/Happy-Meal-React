import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Food for Happy Gut</h1>
            <p>RECIPES TO CALM. NOURISH & HEAL</p>
            <Link to='/mealItem' className="Link">
            <Button variant="contained">See Meal Item</Button>
            </Link>
        </div>
    );
};

export default Home;