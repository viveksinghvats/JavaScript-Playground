import { PRODUCT_IMAGE } from "../utils/constants";

const ResturantCard = (props) => {
    const { name, cusine, starRating, eta, index } = props.resData;
    return (
        <div className="res-card">
            <div >
                <img className="res-card-image" src={PRODUCT_IMAGE + index} />
            </div>
            <h3>{name}</h3>
            <h4>{cusine}</h4>
            <h4>{starRating}</h4>
            <h4>{eta}</h4>
        </div>
    );
}

export default ResturantCard;