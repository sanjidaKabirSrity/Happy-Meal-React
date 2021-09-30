import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import './App.css';
import Heading from './components/Heading/Heading';
import React, { useEffect , useState } from 'react';
import Resturant from './components/Resturant/Resturant';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SingleMeal from './components/SingleMeal/SingleMeal';

function App() {
  const [searchText, setSearchText] = useState('');

    const [meals , setMeals] = useState([]);
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`).then(res=>res.json()).then(data => setMeals(data.meals))
    },[searchText])

    const handleSearch=e=>{
        const searchText = e.target.value;
        setSearchText(searchText);
    }
  return (
    <div className="App">
      <Router>
        <Heading handleSearch={handleSearch}/>
        {/* <Resturant meals={meals}/> */}
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/mealItem">
            <Resturant meals={meals}/>
          </Route>
          <Route exact path="/mealItem/:mealsId">
              <SingleMeal></SingleMeal>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
