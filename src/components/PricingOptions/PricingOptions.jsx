import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricing/DaisyPricingCard';

const PricingOptions = ({ pricigPromise }) => {

  const pricingData = use(pricigPromise);

  console.log(pricingData);


  return (
    <div className='max-w-[1300px] mx-auto bg-amber-50'>
      <h2 className="text-5xl text-center m-10">Get Our Membership</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingData.map((pricing) => (
          <PricingCard
          key={pricing.id}
          pricing={pricing}></PricingCard>
        ))}

        {/* {pricingData.map((pricing, index) => (
          <DaisyPricingCard 
          key={index}
          pricing={pricing}></DaisyPricingCard>
        ))} */}
      </div>
    </div>
  );


};

export default PricingOptions;