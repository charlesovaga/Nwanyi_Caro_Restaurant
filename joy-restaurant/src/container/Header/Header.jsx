import React from 'react';

import {images} from "../../constants"
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
    <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key to Fine Dinning</h1>
      <p className="p__opensans" style = {{margin: '2rem 0'}}>One of the best restaurant as regards to quality catering services both outdoor and indoor services that worth rebooking, located at a very high secured area with new ultra modern road that are sound to the core, it also have a big conference hall for ceremonies of different types with spacious space for parking of cars indeed is a nice place to spend and enjoy!!! </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
     <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
