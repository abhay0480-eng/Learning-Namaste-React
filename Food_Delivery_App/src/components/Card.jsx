import React from "react";
import { CardImgUrl } from "../utils/constants";

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
      <div className="w-full h-40 rounded-xl">
        <img
          src={`${CardImgUrl}${cloudinaryImageId}`}
          alt="mylogo"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <h3 className="text-lg font-semibold py-1">{name}</h3>
      <div className="flex text-base font-semibold gap-x-2 items-center pb-1">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="10"
            cy="10"
            r="9"
            fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
          />
          <path
            d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="StoreRating20_svg__paint0_linear_32982_71567"
              x1="10"
              y1="1"
              x2="10"
              y2="19"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#21973B" />
              <stop offset="1" stopColor="#128540" />
            </linearGradient>
          </defs>
        </svg>
        <span>
          {avgRating} . {sla?.slaString}
        </span>
      </div>
      <div className="text-sm text-[#02060c99] font-light text-wrap whitespace-normal wrap-break-word">
        {cuisines.join(", ")}
      </div>
      <div className="text-sm text-[#02060c99] font-light py-1">{locality}</div>
    </div>
  );
};

export default Card;
