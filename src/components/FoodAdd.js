import { useState, useContext } from "react";
import RestaurantsContext from "../context/restaurants";

function FoodAdd({ restaurant }) {

    const { updateRestaurant } = useContext(RestaurantsContext);

    const [name, setName] = useState("");
    const [diet, setDiet] = useState("");
    const [rating, setRating] = useState(0);
    
    const handleAddClick = () => {
        const foodItem = {
            foodName: name,
            foodDiet: diet,
            foodRating: rating
        }

        restaurant.foodList = [
            ...restaurant.foodList,
            foodItem
        ];

        updateRestaurant(restaurant);
    };

    const handleOnRatingChange = (event) => {
        const value = event.target.value;
        if(value >= 0 && value <= 5) {
            setRating(value);
        }
    };

    const handleOnDietChange = (event) => {
        setDiet(event.target.value);
    }

    const handleOnNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <div className="field">
                <label className="label">Name</label>
                <input className="input" onChange={handleOnNameChange} value={name}></input>
            </div>
            <div className="field">
                <label className="label">Dietary option</label>
                <div className="control">
                    <div className="select" onChange={handleOnDietChange}>
                        <select>
                            <option value=""></option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                            <option value="dairy free">Dairy Free</option>
                            <option value="egg free">Egg Free</option>
                            <option value="gluten free">Gluten Free</option>     
                        </select>
                    </div>
                </div>
            </div>

            <div className="field">
                <label className="label">Rating</label>
                <input className="input" onChange={handleOnRatingChange} value={rating} type="number" />
            </div>

            <div className="field">
                <button className="column button is-success" onClick={handleAddClick}>Add Food item</button>
            </div>
        </div>
    );
}

export default FoodAdd;