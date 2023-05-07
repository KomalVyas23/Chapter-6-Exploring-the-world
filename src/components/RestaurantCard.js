 import {CDN_URL} from "../utils/constants";
 //Restaurant Card
 const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime} = resData?.data;
    return(
        <div className='res-card'>
            <img src={CDN_URL + cloudinaryImageId} alt="img" className="res-logo"/>
           <div className="res-info">
           <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{deliveryTime} min</h4>
            <h4>Rs.{costForTwo/100} for Two</h4>
           </div>
        </div>
    );
 }

 export default RestaurantCard;