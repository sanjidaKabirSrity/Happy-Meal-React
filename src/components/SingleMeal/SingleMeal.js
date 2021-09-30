import React, { useEffect, useState } from 'react';
import './SingleMeal.css';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { useParams } from 'react-router';

const SingleMeal = () => {
    const {mealsId} = useParams();
    const [meal, setMeal] = useState([]);
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsId}`).then(res=> res.json()).then(data=>setMeal(data.meals));
    },[])
    return (
        <Box className="Box" sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                {
                    meal.map(ml => <Grid item xs={2} sm={4} md={4}>
                    <div className="single-meal">
                        <img src={ml.strMealThumb} alt="" />
                        <div className="text">
                            <h1>{ml.strMeal}</h1>
                            <p>{ml.strInstructions}</p>
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