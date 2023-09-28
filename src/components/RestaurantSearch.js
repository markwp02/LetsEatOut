import { GoSearch } from "react-icons/go";

function RestaurantSearch() {
    
    return (
        <div class="panel is-primary">
            <p class="panel-heading">Restaurants</p>
            <div class="panel-block">
                <p class="control has-icons-left">
                    <input class="input is-primary" type="text" placeholder="Search" />
                    <span class="icon is-left">
                        <GoSearch />
                    </span>
                </p>
            </div>
        </div>
    );
}

export default RestaurantSearch;