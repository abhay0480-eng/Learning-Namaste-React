import React from "react";
import { CardImgUrl, ratingStar } from "../utils/constants";
import { Link } from "react-router";

const Card = ({ cardData }) => {
  const {
    name,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    avgRating,
    locality,
    sla,
  } = cardData?.info;
  return (
    <div className=" p-10 text-left  bg-white rounded-lg max-h-96 min-h-96">
      <Link to={`/menu/${cardData?.info?.id}`} className="cursor-pointer">
        <div className="w-full h-40 rounded-xl">
          <img
            src={`${CardImgUrl}${cloudinaryImageId}`}
            alt="mylogo"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <h3 className="text-lg font-semibold py-1">{name}</h3>
        <div className="flex text-base font-semibold gap-x-2 items-center pb-1">
          {ratingStar}
          <span>
            {avgRating} . {sla?.slaString}
          </span>
        </div>
        <div className="text-sm text-[#02060c99] font-light text-wrap whitespace-normal wrap-break-word">
          {cuisines.join(", ")}
        </div>
        <div className="text-sm text-[#02060c99] font-light py-1">
          {locality}
        </div>
      </Link>
    </div>
  );
};

export default Card;
