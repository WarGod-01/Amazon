import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
        
        
            <div className='home_row'>
                 <Product
                 id={1}
                 title="Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm f4 is STM Lens (Black)" 
                price={59990}
                image='https://m.media-amazon.com/images/I/41ByPtffxPL._SY300_SX300_QL70_FMwebp_.jpg'
                rating={5}
              />
                 <Product
                 id={2}
                 title="FLIPBOAT Machine Gun Toy with
                  LED Flashing Lights and Sound Effects for Boys
                   Girls Kids Playing Gun Toys for Boys Combat Military Mission Machine Gun" 
                price={499.99}
                image='https://m.media-amazon.com/images/I/61se528pdpL._SL1500_.jpg'
                rating={3}
              />
                {/* {priduct} */}
                {/* {priduct} */}
            </div>
            
            <div className='home_row'>
            <Product
            id={3}
                 title="Byrna SD XL Black Pepper Kit" 
                price={37754.91}
                image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQoJEP4SF7qtllK0QQ17FDHCugrGIn448Dmh7u6zKtfrcGBcFBwq5MSYAIY7ApPKGZpJoebB6mPbDckItTkUtBwHqxABC-&usqp=CAY'
                rating={4}
              />
                 <Product
                 id={4}
                 title="Hunting Jackets Amazon G8 Tactical Jacket Set with Pants
                  Military Uniform Suit US Army Clothes Clothing Combat WindbreakHuntingHunting" 
                price={17215.45}
                image='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTUmEDmpA1dJcFkytQmuPMkKwhSgfLCnE6ho31Ok5miwhH-cWOMu6EpqyTrcm7OR0VqWxlRS1MWrDnLnFme22fRa0CU1iXq-g-LRbWP-4kp&usqp=CAE'
                rating={5}
              />
                 <Product 
                 id={5}
                 title="Apple iPhone 14 Pro (128 GB) - Space Black" 
                price={129900}
                image='https://m.media-amazon.com/images/I/61XO4bORHUL._SL1500_.jpg'
                rating={5}
               />
          
            </div>
            <div className='home_row'>
                 <Product 
                id={6}
                 title="LG 49GR85DC-B.AUS 49 Curved Ultragear™ DQHD 1ms 240Hz Monitor with VESA DisplayHDR™ 1000, Black" 
                price={134900}
                image='https://m.media-amazon.com/images/I/61dmFw-toML._SL1500_.jpg'
                rating={5}
                 />
        
            </div>
        </div>   
    </div>
  )
}

export default Home
