
import AvailableMeals from './AvailableMeals';
import { Fragment } from 'react';
import MealsSummary from './MealsSummary';

const Meals = props => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )
}

export default Meals;