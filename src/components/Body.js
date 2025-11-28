import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { SEARCH_ICON } from "../utils/constants";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

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
                <div className="search">
                    <button
                     onClick={()=>{
                        const filteredRestraunt =listOfRestaurants.filter((res)=>
                             res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                         setListOfRestaurants(filteredRestraunt);
                    }}>
                    <img className="search-icon" src={SEARCH_ICON} alt="search icon" width="20" height="20" />
                    </button>
                    <input 
                        type="text" 
                        className="search-box"
                        value={searchText}
                        onChange={(e)=> {
                            setSearchText(e.target.value);
                        }}
                    />           
                </div>
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