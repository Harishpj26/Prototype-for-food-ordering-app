import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    if (!resData) return null;

    const {
        name,
        cuisines = [],
        avgRating,
        costForTwo,
        cloudinaryImageId,
        sla
    } = resData;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={CDN_URL + cloudinaryImageId}
                alt={name}
            />
            <h3>{name}</h3>
           <h4>{cuisines.slice(0, 4).join(", ")}</h4>
            <div className="rating-price">
                <h4><span className="ratings">{avgRating}</span></h4>
                <h4>{costForTwo}</h4>
            </div>

            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;
