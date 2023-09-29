import { GoSearch } from "react-icons/go";

function RestaurantSearch() {
    
    return (
        <div className="panel is-primary">
            <p className="panel-heading">Restaurants</p>
            <div className="panel-block">
                <p className="control has-icons-left">
                    <input className="input is-primary" type="text" placeholder="Search" />
                    <span className="icon is-left">
                        <GoSearch />
                    </span>
                </p>
            </div>
        </div>
    );
}

export default RestaurantSearch;