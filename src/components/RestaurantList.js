import { useContext } from "react";
import RestaurantsContext from "../context/restaurants";
import RestaurantShow from "./RestaurantShow";

function RestaurantList() {
    const { restaurants } = useContext(RestaurantsContext);

    const renderedRestaurants = restaurants.map((restaurant) => {
        return <RestaurantShow key={restaurant.restaurantId} restaurant={restaurant} />
    });

    console.log(renderedRestaurants);

    return(
        <div className="panel-block">
            <table className="table">
                <tbody>
                {renderedRestaurants}
                </tbody>
            </table>

        </div>
    );
}

export default RestaurantList;