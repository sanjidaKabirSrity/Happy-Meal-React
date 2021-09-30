import React from 'react';
import './Meal.css';
import {Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const {idMeal, strMeal ,strMealThumb,strInstructions} = props.meal;
    return (
        <Card sx={{ maxWidth: 345 }} className="card">
        <CardMedia
          component="img"
          height="194"
          image={strMealThumb}
          alt="Paella dish"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {strMeal}
        </Typography>
          <Typography variant="body3" color="text.secondary">{strInstructions.slice(0,150)}</Typography><br />
          <Link to={`/mealItem/${idMeal}`} className="Link">
          <Button variant="contained" className="Button">See Details</Button>
          </Link>
        </CardContent>
      </Card>
    );
};

export default Meal;