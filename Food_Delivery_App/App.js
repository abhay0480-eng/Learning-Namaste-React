import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./components/Card";
const logo = new URL("./applogo.png", import.meta.url);

// React.createElement is used to create a React element. It is an object that describes a DOM node.
// const heading = React.createElement("h1", { id: "heading" }, "Hello India!");

// JSX is a syntax extension that allows us to write HTML-like code in JavaScript.
// It is transformed into React.createElement calls by the build tools.
// The following line is equivalent to the above React.createElement call.
// JSX is not valid JavaScript, so it needs to be transpiled to JavaScript using Babel or a similar tool.
// The JSX code is transformed into a React element object that can be rendered to the DOM.

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>
        <img src={logo} alt="mylogo" className=" w-20 h-20 bg-gray-800" />
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const cardData = [
  {
    info: {
      id: "555872",
      name: "The Burger Company",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/26/0754aab9-56a4-48c3-8fe0-9c5fd549575b_555872.jpg",
      locality: "KELA NAGAR",
      areaName: "DODHPUR",
      costForTwo: "₹350 for two",
      cuisines: ["Fast Food", "Burgers", "Beverages"],
      avgRating: 3.9,
      parentId: "206007",
      avgRatingString: "3.9",
      totalRatingsString: "1.6K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: 3,
      },
      availability: {
        nextCloseTime: "2025-07-31 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1007a94a-d601-40f9-add3-a7ed5afe8002",
    },
    cta: {
      link: "https://www.swiggy.com/city/aligarh/the-burger-company-kela-nagar-dodhpur-rest555872",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "566507",
      name: "Faasos' Signature Wraps & Rolls",
      cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
      locality: "Samad Road",
      areaName: "Civil Lines",
      costForTwo: "₹350 for two",
      cuisines: [
        "Fast Food",
        "Snacks",
        "North Indian",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "340366",
      avgRatingString: "4.3",
      totalRatingsString: "323",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.2 km",
        iconType: 3,
      },
      availability: {
        nextCloseTime: "2025-07-30 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1007a94a-d601-40f9-add3-a7ed5afe8002",
    },
    cta: {
      link: "https://www.swiggy.com/city/aligarh/faasos-signature-wraps-and-rolls-samad-road-civil-lines-rest566507",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "575247",
      name: "Veg Darbar by Behrouz Biryani",
      cloudinaryImageId: "2b579171cefc545ce6479e21c0016798",
      locality: "Centre Point",
      areaName: "Samad Rd",
      costForTwo: "₹700 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "344904",
      avgRatingString: "4.3",
      totalRatingsString: "83",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.2 km",
        iconType: 3,
      },
      availability: {
        nextCloseTime: "2025-07-30 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1007a94a-d601-40f9-add3-a7ed5afe8002",
    },
    cta: {
      link: "https://www.swiggy.com/city/aligarh/veg-darbar-by-behrouz-biryani-centre-point-samad-rd-rest575247",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "809742",
      name: "Makhani Darbar",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/6c41f1e7-a958-437a-ad71-c301e7c48f35_809742.JPG",
      locality: "OPP Manglam Complex Samad Road",
      areaName: "Vaishno Compound",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts",
      ],
      avgRating: 3.1,
      parentId: "478595",
      avgRatingString: "3.1",
      totalRatingsString: "28",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.2 km",
        iconType: 3,
      },
      availability: {
        nextCloseTime: "2025-07-30 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹165 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
        headerTypeV2: 12,
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-1007a94a-d601-40f9-add3-a7ed5afe8002",
    },
    cta: {
      link: "https://www.swiggy.com/city/aligarh/makhani-darbar-opp-manglam-complex-samad-road-vaishno-compound-rest809742",
      type: "WEBLINK",
    },
  },
];

// componet in react is a function that returns a React element.
// Here, we define a functional component that returns a React element.
// Components can be reused and can accept props to customize their output.
// The component can be used like a regular HTML tag in JSX.
// The component can also be used to encapsulate logic and state management.
// The component can be used to create a reusable UI element.

const Body = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center p-4 bg-gray-200">
        <h1 className="text-2xl font-bold">Food Delivery App</h1>
        <input type="text" placeholder="Search" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cardData?.map((restrauntName, index) => (
          <div key={index}>
            <Card cardData={restrauntName} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
      <p>All rights reserved</p>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
