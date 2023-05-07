import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants){
    const filterData = restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return filterData;
}

//Body Component
const Body = () => {
    // local state variable - super powerful variable
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

    //This is same as abov
    //const [restaurants, setRestaurants] = arr;

    // const restaurants = arr[0];
    // const setRestaurants = arr[1];

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        //API Call
        getRestaurants();
    }, []);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1488782&lng=72.99698719999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //Here we should use optional chaining, or else it can break.
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        console.log("restaurants updated");
    }

    //Conditional rendering
    //If restaurant is empty => Shimmer UI
    // If restaurant has data => actual data UI

    // Early return
    if(!allRestaurants) return null;

    if (filteredRestaurants?.length === 0)
        return <h1>No Restaurants match your filter!!</h1>;

    return allRestaurants?.length === 0 ? (<Shimmer/> ):(
        <>
        <div className='body'>
           
            <div className="search-container">
                <input 
                type="text" 
                className="search-input" 
                placeholder="Search" 
                value={searchText} 
                onChange = {(e) => {
                    setSearchText(e.target.value);
                }}
                />
                <button className="search-btn"
                onClick={()=>{
                    //need to filter data
                    const data = filterData(searchText, allRestaurants);
                   
                    setfilteredRestaurants(data);
                }}>Search</button>
            </div>
            
            <div className = "res-container">
                {
                    filteredRestaurants.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant} />)
                }
            </div>
        </div>
        </>
    );
 } 
 export default Body;