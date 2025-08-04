import React, { useEffect, useState } from "react";
import { cardData } from "../utils/mockData";
import Card from "./Card";
import CardShimmer from "./ShimmerUI/CardShimmer";
import { resApiUrl } from "../utils/constants";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState();
  const handleFilter = () => {
    const filterData = resData.filter((res) => res?.info.avgRating > 4);
    setResData(filterData);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const reqData = await fetch(
        `${resApiUrl}?lat=27.90931752971707&lng=78.11142336577177&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
      );
      const resData = await reqData.json();
      console.log(
        "resData",
        resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || cardData,
      );
      setResData(
        resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.sort(
          (a, b) => b.info.avgRating - a.info.avgRating,
        ) || [],
      );
    } catch (error) {
      console.log("Error fetching data:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(resData);
  }, [resData]);

  const handleSearch = (e) => {
    setLoading(true);
    const searchValue = e.target.value.toLowerCase()
    const filterData = resData.filter((res) => res?.info?.name.toLowerCase().includes(searchValue))
    setFilteredData(filterData.length > 0 ? filterData : resData);
    setLoading(false);
  }

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
            Top Rated Restaurants{" "}
          </button>
          <input type="text" placeholder="Search Restaurants"  onChange={((e) => handleSearch(e))}/>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {loading ? (
          <>
            {Array(10)
              .fill("")
              .map((_, index) => (
                <CardShimmer key={index} />
              ))}
          </>
        ) : filteredData?.length === 0 ? (
          <h1 className="text-2xl font-bold text-center">
            No Restraunts Found
          </h1>
        ) : (
          <>
            {filteredData?.map((restrauntName, index) => (
              <div key={index}>
                <Card cardData={restrauntName} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
