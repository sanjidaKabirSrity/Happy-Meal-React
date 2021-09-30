import React, { useEffect, useState } from 'react';
import './SingleMeal.css';
import { Box } from '@mui/system';
import { Button, Grid } from '@mui/material';
import { useParams , useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const SingleMeal = () => {
    const {mealsId} = useParams();
    const [meal, setMeal] = useState([]);
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsId}`).then(res=> res.json()).then(data=>setMeal(data.meals));
    },[])
    const history = useHistory();
    function handleClick() {
        history.push("/mealItem");
      }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                {
                    meal.map(ml => <Grid item xs={12} sm={12} md={12}>
                    <div className="single-meal">
                        <img src={ml.strMealThumb} alt="" />
                        <div className="text">
                            <h1>{ml.strMeal}</h1>
                            <p>{ml.strInstructions}</p>
                            <div className="Link">
                               <Button variant="contained" className="btn" onClick={handleClick}>Go Back</Button>
                            </div>
                        </div>
                    </div>
                    </Grid>)
                }
                </Grid>
            </Grid>
        </Box>
    );
};

export default SingleMeal;