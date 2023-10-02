import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const RestaurantsContext = createContext();

function Provider({ children }) {
    const [restaurants, setRestaurants] = useState([]);

    const fetchRestaurants = useCallback(async () => {
        const response = await axios.get('http://localhost:8080/api/restaurants');

        setRestaurants(response.data);
    }, []);

    const updateRestaurant = async(updatedRestaurant) => {
        console.log(updatedRestaurant);
        await axios.put(`http://localhost:8080/api/restaurants`, {
            ...updatedRestaurant,
        });
        fetchRestaurants();
    }

    const valueToShare = {
        restaurants,
        fetchRestaurants,
        updateRestaurant
    };
    
    return <RestaurantsContext.Provider value={valueToShare}>{children}</RestaurantsContext.Provider>
}

export { Provider };
export default RestaurantsContext;