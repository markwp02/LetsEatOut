function RestaurantShow({ restaurant, handleClickRow, handleClickDelete }) {
    return (
        <tr>
            <td onClick={() => handleClickRow(restaurant)}>{restaurant.restaurantName}</td>
            <td onClick={() => handleClickRow(restaurant)}>{restaurant.restaurantAddress}</td>
            <td onClick={() => handleClickRow(restaurant)}>{restaurant.restaurantCuisine}</td>
            <td className="delete" onClick={() => handleClickDelete(restaurant)} aria-label="close"></td>
        </tr>
    );
}

export default  RestaurantShow;