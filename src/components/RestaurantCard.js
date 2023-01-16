import { IMG_CDN_URL } from "../contain";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  avgRating,
  deliveryTime,
  costForTwoString,
  aggregatedDiscountInfoV2,
  data,
}) => {
  //console.log(aggregatedDiscountInfoV2.descriptionList[0].meta);
  return (
    <div className="card">
      <div className="imageCard">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <div className="ribbon">
          <div>Promoted</div>
        </div>
      </div>
      <div className="cardContent">
        <h2>{name}</h2>
        <div className="foodDesciption">{cuisines.join(", ")}</div>
        <div className="reviewSection">
          <div className={avgRating >= 4 ? "starSectionback" : "starSection"}>
            <span>*</span>
            <span>{avgRating}</span>
          </div>
          <div>{deliveryTime} MINS</div>
          <div>{costForTwoString} </div>
        </div>

        <div className="discount">
          {aggregatedDiscountInfoV2.descriptionList[0].meta}
        </div>
      </div>
    </div>
  );
};

export default RestrauntCard;
