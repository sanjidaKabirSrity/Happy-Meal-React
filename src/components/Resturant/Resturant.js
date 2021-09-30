import React from 'react';
import './Resturant.css';
import Meal from '../Meal/Meal';
import './Resturant.css';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';


const Resturant = (props) => {
    const {meals} = props;
    
    return (
        <div className="Meal-Item">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    meals.map(meal => <Grid item xs={2} sm={4} md={4}>
                    <Meal meal={meal}></Meal>
                    </Grid>)
                }
                </Grid>
            </Box>
        </div>
    );
};

export default Resturant;