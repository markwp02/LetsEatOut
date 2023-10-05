import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const RestaurantsContext = createContext();

/*
    Context that is used for all REST API requests with axios
*/
function Provider({ children }) {
    const [restaurants, setRestaurants] = useState([]);

    const addRestaurant = async(newRestaurant) => {
        await axios.post('http://localhost:8080/api/restaurants', {
            ...newRestaurant,
        });
        fetchRestaurants();
    };

    const addFoodToRestaurant = (restaurant, foodToAdd) => {
        restaurant.foodList = [
            ...restaurant.foodList,
            foodToAdd
        ];

        updateRestaurant(restaurant);
    };

    const deleteFoodFromRestaurant = (restaurant, foodId) => {
        const updatedFoodList = restaurant.foodList.filter((foodItem) => {
            return foodItem.foodId !== foodId;
        });
        restaurant.foodList = updatedFoodList;
        updateRestaurant(restaurant);
    };

    const deleteRestaurantById = async (restaurantId) => {
        await axios.delete(`http://localhost:8080/api/restaurants/${restaurantId}`); 
        
        fetchRestaurants();
    };

    const fetchRestaurants = useCallback(async () => {
        const response = await axios.get('http://localhost:8080/api/restaurants');

        setRestaurants(response.data);
    }, []);

    const updateRestaurant = async(updatedRestaurant) => {
        await axios.put('http://localhost:8080/api/restaurants', {
            ...updatedRestaurant,
        });
        fetchRestaurants();
    };

    const valueToShare = {
        restaurants,
        addFoodToRestaurant,
        addRestaurant,
        deleteFoodFromRestaurant,
        deleteRestaurantById,
        fetchRestaurants,
        updateRestaurant
    };
    
    return <RestaurantsContext.Provider value={valueToShare}>{children}</RestaurantsContext.Provider>
}

export { Provider };
export default RestaurantsContext;