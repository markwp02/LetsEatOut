import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const RestaurantsContext = createContext();

function Provider({ children }) {
    const [restaurants, setRestaurants] = useState([]);

    const addRestaurant = async(newRestaurant) => {
        await axios.post('http://localhost:8080/api/restaurants', {
            ...newRestaurant,
        });
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
        addRestaurant,
        fetchRestaurants,
        updateRestaurant
    };
    
    return <RestaurantsContext.Provider value={valueToShare}>{children}</RestaurantsContext.Provider>
}

export { Provider };
export default RestaurantsContext;