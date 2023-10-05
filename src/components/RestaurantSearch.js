import { GoSearch } from "react-icons/go";

/*
    Component to display a search input that stores the result in state
    searchTerm - State that records the value of the searchTerm
    handleSearchTermChange - function that will update the searchTermState
*/
function RestaurantSearch({ searchTerm, handleSearchTermChange }) {

    return (
        <div className="panel is-primary">
            <p className="panel-heading">Restaurants</p>
            <div className="panel-block">
                <p className="control has-icons-left">
                    <input className="input is-primary" type="text" onChange={handleSearchTermChange} placeholder="Search" value={searchTerm} />
                    <span className="icon is-left">
                        <GoSearch />
                    </span>
                </p>
            </div>
        </div>
    );
}

export default RestaurantSearch;