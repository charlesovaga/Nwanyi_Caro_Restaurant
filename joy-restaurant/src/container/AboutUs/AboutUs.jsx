import React from 'react';

import {images} from "../../constants"
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'> 
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Welcome to Joy Restaurant, where culinary excellence meets warm hospitality! At Joy Restaurant, we are passionate about creating memorable dining experiences for our guests. Nestled in the heart of Nsukka, our restaurant has been a beloved dining destination for locals and visitors alike for years. Our menu is a culinary journey that spans continents, offering a diverse range of dishes to suit every palate. From savory appetizers to mouthwatering mains and decadent desserts, each dish is carefully curated to deliver a symphony of flavors.
        Whether you're a fan of classic comfort food or crave adventurous global flavors, our menu has something to delight your taste buds. Be sure to ask our staff for wine or cocktail pairings to enhance your dining experience.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img  src={images.knife} alt='about_knife'/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>In July 2018, Nwanyi Caro embarked on a culinary adventure that would eventually lead to the creation of Joy Restaurant. With a vision to [briefly describe the founder's vision, e.g., "introduce the exotic flavors of Thai cuisine to our community"], Nwanyi Caro took the first steps towards creating a dining experience unlike any other.
        <b/>
        Our humble beginnings saw us serving [mention the initial offerings, e.g., "a small selection of Thai street food"] in a cozy space that quickly became a beloved gathering spot for locals. [Optional: Include anecdotes or milestones from the early days.]
        <b/>
        As the years went by, we expanded our menu and honed our culinary skills. It grew into a thriving establishment, known for its dedication to [mention key principles like quality, authenticity, sustainability, etc.].
        Throughout our journey, we've remained deeply committed to the community that embraced us from the start. We've supported local charities, sourced ingredients from nearby farms, and hosted countless celebrations and events.
        Our dedication to culinary excellence has not gone unnoticed. Over the years, we've had the privilege of receiving numerous accolades and awards, which serve as a testament to our unwavering commitment to our craft.
        Today, Joy Restaurant stands as a beacon of culinary innovation, offering a menu that seamlessly blends tradition and innovation. Our cozy ambiance and exceptional service create an unforgettable dining experience.
        As we move forward, we remain rooted in our traditions while embracing the ever-evolving culinary landscape. We are excited to continue sharing our passion for food with you, our cherished patrons.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
