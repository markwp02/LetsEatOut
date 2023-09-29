import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantAdd from "./components/RestaurantAdd";
import { useContext, useEffect } from "react";
import RestaurantsContext from "./context/restaurants";

function App() {

    const { fetchRestaurants } = useContext(RestaurantsContext);

    useEffect(() => {
        fetchRestaurants();
    }, [fetchRestaurants]);

    return (
        <div>
            <RestaurantSearch />
            <RestaurantAdd />
            <RestaurantList />
        </div>
    );
}

export default App;