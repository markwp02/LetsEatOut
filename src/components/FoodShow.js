import { GoStarFill } from "react-icons/go";

function FoodShow({ food, handleDeleteFood }) {
    
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