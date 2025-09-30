import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
  // console.log(pricing)
 const {name, price, description, features} = pricing;

  return (
    <div className="flex flex-col border bg-amber-500 rounded-2xl p-4">
      {/* Card header */}
      <div>
        <h1 className="text-7xl">{name}</h1>
        <h4 className="text-3xl">{price}</h4>
      </div>
      {/* Card Body */}
      <div className="flex-1 bg-amber-400 p-4 rounded-2xl mt-10">
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature}></PricingFeature>
        ))}
      </div>
      <button className="btn w-full m-4  ">Subscribe</button>
    </div>
  );
};

export default PricingCard;