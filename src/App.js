import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantAdd from "./components/RestaurantAdd";
import { useContext, useEffect, useState } from "react";
import RestaurantsContext from "./context/restaurants";

function App() {

    const { fetchRestaurants } = useContext(RestaurantsContext);
    const [ searchTerm, setSearchTerm ] = useState('');

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        fetchRestaurants();
    }, [fetchRestaurants]);

    return (
        <div>
            <RestaurantSearch searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
            <RestaurantList searchTerm={searchTerm} />
            <RestaurantAdd />
        </div>
    );
}

export default App;