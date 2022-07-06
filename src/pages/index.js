import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} handleIsOpen={handleIsOpen} />
      <Navbar handleIsOpen={handleIsOpen} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services/>
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
