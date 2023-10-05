import { useContext, useState } from "react";
import RestaurantsContext from "../context/restaurants";
import RestaurantShow from "./RestaurantShow";
import FoodModal from "./FoodModal";

function RestaurantList() {
    const { restaurants, deleteRestaurantById } = useContext(RestaurantsContext);
    const [showModal, setShowModal] = useState(false);
    const [modalRestaurant, setModalRestaurant] = useState(null);

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

    const renderedRestaurants = restaurants.map((restaurant) => {
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