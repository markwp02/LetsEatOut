import { useContext } from "react";
import FoodShow from "./FoodShow";
import RestaurantsContext from "../context/restaurants";


function FoodList({ restaurant }) {
    
    const { updateRestaurant } = useContext(RestaurantsContext);


    const handleDeleteFood = (foodToDelete) => {
        const updatedFoodList = restaurant.foodList.filter((foodItem) => {
            return foodItem.foodId !== foodToDelete.foodId;
        });
        restaurant.foodList = updatedFoodList;
        updateRestaurant(restaurant);
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