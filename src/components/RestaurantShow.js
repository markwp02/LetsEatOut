function RestaurantShow({ restaurant, handleClickRow }) {
    return (
        <tr onClick={() => handleClickRow(restaurant)}>
            <td>{restaurant.restaurantName}</td>
            <td>{restaurant.restaurantAddress}</td>
            <td>{restaurant.restaurantCuisine}</td>
        </tr>
    );
}

export default  RestaurantShow;