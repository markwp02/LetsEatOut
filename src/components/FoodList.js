import FoodShow from "./FoodShow";

function FoodList({ foodList }) {
    
    const renderedFoodItems = foodList.map((food) => {
        return <FoodShow key={food.foodId} food={food} />
    });
    
    return (
        <div className="panel-block">
            <table className="table is-hoverable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Diet</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedFoodItems}
                </tbody>
            </table>
    </div>
    );
}

export default FoodList;