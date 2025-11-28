import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://api.allorigins.win/raw?url=" +
            encodeURIComponent(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946"
            )
        );
        const json = await data.json();
        //console.log(json);
        const restaurantCard = json?.data?.cards?.find(
            (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        console.log("Restaurants:", restaurants);
        setListOfRestaurants(restaurants);
    }
    // while restaurants array is empty (loading) show the shimmer
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={
                    () => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setListOfRestaurants(filteredList);
                    }
                }>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestaurants
                    .filter((res) => res.info)
                    .map((res) => (
                        <RestaurantCard key={res.info.id} resData={res.info} />
                    ))}
            </div>

        </div>
    )
}

export default Body;