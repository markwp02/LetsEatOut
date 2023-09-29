import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const RestaurantsContext = createContext();

function Provider({ children }) {
    const [restaurants, setRestaurants] = useState([]);

    const fetchRestaurants = useCallback(async () => {
        const response = await axios.get('http://localhost:8080/api/restaurants');

        setRestaurants(response.data);
    }, []);

    const valueToShare = {
        restaurants,
        fetchRestaurants
    };
    
    return <RestaurantsContext.Provider value={valueToShare}>{children}</RestaurantsContext.Provider>
}

export { Provider };
export default RestaurantsContext;