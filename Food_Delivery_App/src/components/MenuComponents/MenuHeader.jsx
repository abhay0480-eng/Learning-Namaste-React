import React from "react";
import { ratingStar } from "../../utils/constants";

const MenuHeader = ({ menuData }) => {
  return (
    <div>
      {" "}
      <h1 className="text-[#02060ceb] text-4xl font-bold">
        {menuData[0]?.card?.card?.text}
      </h1>
      <div className="rounded-lg drop-shadow-2xl p-5 bg-white my-5">
        <div className="flex py-2 gap-2 items-center  bg-white rounded-lg font-semibold">
          <p>{ratingStar}</p>
          <p>
            {menuData[2]?.card?.card?.info?.avgRating} (
            {menuData[2]?.card?.card?.info?.totalRatingsString})
          </p>
          <p>{menuData[2]?.card?.card?.info?.costForTwoMessage}</p>
        </div>
        <div>
          <p className="text-[#ff5200] font-semibold underline text-sm">
            {menuData[2]?.card?.card?.info?.cuisines.join(", ")}
          </p>
          <p>
            <span className="text-xs font-bold pr-4">Outlet</span>{" "}
            <span className="text-[#02060c99] text-sm">
              {menuData[2]?.card?.card?.info?.areaName}
            </span>
          </p>
          <p className="text-xs font-bold pr-4 my-2">
            {menuData[2]?.card?.card?.info?.sla?.slaString}
          </p>
        </div>
        <div className="py-4 border-t-[1px] mt-5 border-t-[#fff0e0] rounded-lg text-[#ff5200] text-sm font-semibold">
          Free delivery on orders above ₹199
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
