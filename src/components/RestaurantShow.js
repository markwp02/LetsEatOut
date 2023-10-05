/*
    Component to display a restaurant
    restaurant - selected restaurant to display
    handleClickRow - function to select the restaurant when clicked
    handleClickDelete - function to delete clicked restaurant
*/
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