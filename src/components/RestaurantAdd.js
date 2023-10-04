import { useState, useContext } from "react";
import RestaurantsContext from "../context/restaurants";

function RestaurantAdd() {
    const { addRestaurant } = useContext(RestaurantsContext);

    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantAddress, setRestaurantAddress] = useState('');
    const [restaurantCuisine, setRestaurantCuisine] = useState('');

    const handleClickAdd = () => {
        const result = validateNewRestaurant();
        if(result) {
            addRestaurant({
                restaurantName,
                restaurantAddress,
                restaurantCuisine
            });
            setRestaurantName('');
            setRestaurantAddress('');
            setRestaurantCuisine('');
        }
    };

    const handleOnNameChange = (event) => {
        setRestaurantName(event.target.value);
    };

    const handleOnAddressChange = (event) => {
        setRestaurantAddress(event.target.value);
    };

    const handleOnCuisineChange = (event) => {
        setRestaurantCuisine(event.target.value);
    };

    const validateNewRestaurant = () => {
        if(restaurantName.length === 0 || restaurantAddress.length === 0 || restaurantCuisine.length === 0) {
            console.warn("New restaurant name, address and cuisine must be populated");
            return false;
        } else {
            return true;
        }
    };

    return (
        <div className="panel-block">
                <input className="input" onChange={handleOnNameChange} value={restaurantName} placeholder="New Restaurant Name"></input>
                <input className="input" onChange={handleOnAddressChange} value={restaurantAddress} placeholder="New Restaurant Address"></input>
                <input className="input" onChange={handleOnCuisineChange} value={restaurantCuisine} placeholder="New Restaurant Cuisine"></input>
                <button className="button is-success" onClick={handleClickAdd}>Add Restaurant</button>
        </div>
    );
}

export default RestaurantAdd;