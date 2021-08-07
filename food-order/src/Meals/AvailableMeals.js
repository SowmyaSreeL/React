import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

const AvailableMeals = props => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErr, setErr] = useState(); //not having any val - we can give null also instaed of empty

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-http-req-cd094-default-rtdb.firebaseio.com/meals.json');
      if(!response.ok) {
        throw new Error('Something went Wrong')
      }

      const data = await response.json();
      const loadedMeals = [];
      for(const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    }
    
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setErr(error.message);
    });
  }, [])

  if(isLoading) {
    return <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

console.log(hasErr)
  if(hasErr) {
    return <section className={classes.MealsErr}>
      <p>{hasErr}</p>
    </section>
  }
  const mealsList = meals.map(mealItem => {
      return <MealItem 
          key={mealItem.id}
          id={mealItem.id}
          name={mealItem.name}
          description={mealItem.description}
          price={mealItem.price}
      />
  })
  return (
      <section className={classes.meals}>
          <Card>
              <ul>{mealsList}</ul>
          </Card>
      </section>
  )
}

export default AvailableMeals;