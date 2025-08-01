import React, { useState } from "react";
import { cardData } from "../utils/mockData";
import Card from "./Card";

const Body = () => {
  const [resData, setResData] = useState(cardData);
  const handleFilter = () => {
    const filterData = resData.filter((res) => res?.info.avgRating > 4);
    setResData(filterData);
  };
  return (
    <div className="">
      <div className="flex justify-between items-center p-4 bg-gray-200">
        <h1 className="text-2xl font-bold">Food Delivery Apps</h1>
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={handleFilter}
            className="bg-black p-2 cursor-pointer cur rounded-2xl text-white"
          >
            {" "}
            Top Rated Restraunts{" "}
          </button>
          <input type="text" placeholder="Searchsdsasdsa" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {resData?.map((restrauntName, index) => (
          <div key={index}>
            <Card cardData={restrauntName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
