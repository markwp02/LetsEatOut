import { GoStarFill } from "react-icons/go";

/*
    Component to display individual food item
    food - food item to display
    handleDeleteFood - function to delete a food item
*/
function FoodShow({ food, handleDeleteFood }) {
    
    // Creates an array of star icons to display the rating
    const renderedRating = Array(food.foodRating)
        .fill(true)
        .map((item, index) => {
            return <GoStarFill key={index} />
        });
    return (
        <tr>
            <td>{food.foodName}</td>
            <td>{food.foodDiet}</td>
            <td>{renderedRating}</td>
            <td className="delete" onClick={() => handleDeleteFood(food)} aria-label="close"></td>
        </tr>
    );
}

export default FoodShow;