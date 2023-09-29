function RestaurantShow({ restaurant }) {
    return (
        <tr>
            <td>{restaurant.restaurantName}</td>
            <td>{restaurant.restaurantAddress}</td>
            <td>{restaurant.restaurantCuisine}</td>
        </tr>
    );
}

export default  RestaurantShow;