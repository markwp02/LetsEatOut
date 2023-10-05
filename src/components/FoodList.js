import { useContext } from "react";
import FoodShow from "./FoodShow";
import RestaurantsContext from "../context/restaurants";

/*
    Component that displays all the food items associated the the supplied restaurant
    restaurant - selected restaurant to display food items
*/
function FoodList({ restaurant }) {
    
    const { deleteFoodFromRestaurant } = useContext(RestaurantsContext);

    const handleDeleteFood = (foodToDelete) => {
       deleteFoodFromRestaurant(restaurant, foodToDelete.foodId);
    };

    const renderedFoodItems = restaurant.foodList.map((food) => {
        return <FoodShow key={food.foodId} food={food} handleDeleteFood={handleDeleteFood}/>
    });
    
    return (
        <div className="panel-block">
            <table className="table is-hoverable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Diet</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedFoodItems}
                </tbody>
            </table>
    </div>
    );
}

export default FoodList;