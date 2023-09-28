import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantAdd from "./components/RestaurantAdd";

function App() {
    return (
        <div>
            <RestaurantSearch />
            <RestaurantAdd />
            <RestaurantList />
        </div>
    );
}

export default App;