import { useContext } from "react";
import RestaurantsContext from "../context/restaurants";
import RestaurantShow from "./RestaurantShow";

function RestaurantList() {
    const { restaurants } = useContext(RestaurantsContext);

    console.log(restaurants);

    const renderedRestaurants = restaurants.map((restaurant) => {
        console.log(restaurant);
        return <RestaurantShow key={restaurant.restaurantId} restaurant={restaurant} />
    });

    return(
        <div className="panel-block">{renderedRestaurants}</div>
    );
}

export default RestaurantList;