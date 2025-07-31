import React from 'react'
import { cardData } from '../utils/mockData'
import Card from './Card'

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
  )
}

export default Body