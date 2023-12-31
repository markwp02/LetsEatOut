import { useState } from "react";
import FoodList from "./FoodList";
import FoodAdd from "./FoodAdd";

/*
    Modal (popup) that will display either the foodList of the selected restaurant, or a form to add a new food item
    handleClose - function to close the modal
    modalRestaurant - selected restaurant to display in modal
*/
function FoodModal({ handleClose, modalRestaurant }) {

    // State used to determine what to display - defaulted to listing food items
    const [showOption, setShowOption] = useState("List");

    const handleChange = (event) => {
        setShowOption(event.target.value);
    };

    const optionsRadioButton = (
        <div className="control">
        <label className="radio">
            <input onChange={handleChange} type="radio" value="List" name="foodOption" checked={showOption === "List"} />
            List
        </label>
        <label className="radio">
            <input onChange={handleChange} type="radio" value="Add" name="foodOption" checked={showOption === "Add"}/>
            Add
        </label>
    </div>
    );

    return (
        <div className="modal is-active">
            <div className="modal-background" />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{modalRestaurant.restaurantName}</p>
                    <button className="delete" onClick={handleClose} aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    {optionsRadioButton}
                    {showOption === "List" && <FoodList restaurant={modalRestaurant}/>}
                    {showOption === "Add" && <FoodAdd restaurant={modalRestaurant} handleClose={handleClose} />}
                </section>
            </div>
        </div>
    );
}

export default FoodModal;