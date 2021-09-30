import React from 'react';
import './Heading.css';
import Logo from '../../logo&fav.png';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';

const Heading = (props) => {
    const activeStyle = {fontWeight: "bold", color: "red", marginLeft:"10px"}

    return (
    <Box className="Box" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={2}>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
        </Grid>

        <Grid item xs={5}>
            <div className="search-box">
                <input onChange={props.handleSearch} className="search" type="search" placeholder="Search your favourite meal" />
            </div>
        </Grid>

        <Grid item xs={5}>
        <nav>
            <NavLink to="/home" activeStyle={activeStyle} className="NavLink">Home</NavLink>
            <NavLink to="/mealItem" activeStyle={activeStyle} className="NavLink">Meal Item</NavLink>
            <NavLink to="/about" activeStyle={activeStyle} className="NavLink">About Us</NavLink>
        </nav>
        </Grid>
        </Grid>   
    </Box>
    );
};

export default Heading;