import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { leftMenuIcon, ratingStar } from "../utils/constants";
import MenuHeader from "../components/MenuComponents/MenuHeader";

const MenuPage = () => {
  const { id } = useParams();
  console.log("id", id);
  const [menuData, setMenuData] = useState([]);

  const fetchMenuData = async () => {
    try {
      const menuReq = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.90931752971707&lng=78.11142336577177&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`,
      );
      const menurRes = await menuReq.json();
      console.log("menurRes", menurRes?.data?.cards || []);
      setMenuData(menurRes?.data?.cards || []);
    } catch (error) {}
  };
  useEffect(() => {
    fetchMenuData();
  }, []);

  // Fetch menu data based on the id
  // Use useEffect to fetch data from an API or a local file
  // Store the fetched data in a state variable

  return (
    <div className="p-5 flex justify-center items-center gap-5">
      <div className="min-w-5xl max-w-5xl">
        <MenuHeader menuData={menuData} />
        <div>
          <div className="text-center">MENU</div>
          {menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
            (menuCategory, index) => {
              return (
                <div key={index} className="my-5">
                  {menuCategory?.card?.card?.itemCards?.length > 0 && (
                    <h2 className="text-lg font-bold">
                      {menuCategory?.card?.card?.title} (
                      {menuCategory?.card?.card?.itemCards?.length}){" "}
                    </h2>
                  )}
                  <div>
                    {menuCategory?.card?.card?.itemCards?.map((item, index) => {
                      return (
                        <div key={index} className="my-5 p-2">
                          <div>
                            <p>
                              {item?.card?.info?.itemAttribute
                                ?.vegClassifier === "VEG" ? (
                                <span>🌱</span>
                              ) : (
                                <span>🍖</span>
                              )}
                            </p>
                            <h2>{item?.card?.info?.name}</h2>
                            <div className="flex gap-5 items-center">
                              {!item?.card?.info?.finalPrice ? (
                                <p>
                                  {" "}
                                  ₹
                                  {parseInt(item?.card?.info?.defaultPrice) /
                                    100 ||
                                    parseInt(item?.card?.info?.price) / 100}
                                </p>
                              ) : (
                                <p>
                                  <span className="line-through gap-3">
                                    {" "}
                                    ₹
                                    {parseInt(item?.card?.info?.defaultPrice) /
                                      100}
                                  </span>{" "}
                                  {parseInt(item?.card?.info?.finalPrice) / 100}
                                </p>
                              )}
                            </div>
                          </div>
                          <div>
                            <img src={} alt="item" className="w-20 h-20" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
