
import { Suspense } from 'react';
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav';
import NavBar from './components/NavBar/NavBar';
import PricingOptions from './components/PricingOptions/PricingOptions';
import ResultChart from './components/ResultChart/ResultChart';
import Example from './components/Example/Example';
import { BarChart } from 'recharts';

const pricigPromise = fetch('pricingData.json').then(res => res.json())


function App() {
      

  return (
    <>
      <header>
        <NavBar></NavBar>

        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <PricingOptions pricigPromise={pricigPromise}></PricingOptions>
        </Suspense>

         <ResultChart></ResultChart>

         <div className='w-[500px] h-[500px]'>
          <Example>

          </Example>
         </div>
         <div className='w-[700px] h[500px]'>
          <BarChart>

          </BarChart>
         </div>


      </main>
    </>
  );
}

export default App
