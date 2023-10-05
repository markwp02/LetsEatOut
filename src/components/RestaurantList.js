import { useContext, useState } from "react";
import RestaurantsContext from "../context/restaurants";
import RestaurantShow from "./RestaurantShow";
import FoodModal from "./FoodModal";

/*
    Component to list all restaurants
    searchTerm - State that will be used to filter the restaurants displayed
*/
function RestaurantList({ searchTerm }) {
    const { restaurants, deleteRestaurantById } = useContext(RestaurantsContext);
    const [showModal, setShowModal] = useState(false);
    const [modalRestaurant, setModalRestaurant] = useState(null);

    const filteredRestaurants = restaurants.filter((restaurant) => 
        restaurant.restaurantName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        restaurant.restaurantAddress.toLowerCase().includes(searchTerm.toLowerCase()) || 
        restaurant.restaurantCuisine.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const handleOpen = () => {
        setShowModal(true);
    };

    const handleClose =() => {
        setShowModal(false); 
    };

    const handleClickRow = (restaurant) => {
        setModalRestaurant(restaurant);
        handleOpen();
    };

    const handleClickDelete = (restaurant) => {
        deleteRestaurantById(restaurant.restaurantId);
    }

    const modal = ( 
        <FoodModal handleClose={handleClose} modalRestaurant={modalRestaurant}>
        </FoodModal>
    );

    const renderedRestaurants = filteredRestaurants.map((restaurant) => {
        return <RestaurantShow key={restaurant.restaurantId} handleClickRow={handleClickRow} handleClickDelete={handleClickDelete} restaurant={restaurant} />
    });

    return(
        <div className="panel-block">
            <table className="table is-hoverable">
                <tbody>
                {renderedRestaurants}
                </tbody>
            </table>
            {showModal && modal}
        </div>
    );
}

export default RestaurantList;