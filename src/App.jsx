
import { Suspense } from 'react';
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav';
import NavBar from './components/NavBar/NavBar';
import PricingOptions from './components/PricingOptions/PricingOptions';

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
      </main>
    </>
  );
}

export default App
