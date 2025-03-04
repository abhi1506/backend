import React from 'react'
import './Homepageupdate.css'
import HomeGeroo from '../home/HomeGeroo';
import NetworkSectionHome from './NetworkSectionHome';


import AISolutions from "../home/AISolutions";
import ServicesSection from "./../home/ServiceSection";
import NewsCarousel from "./../home/NewsCarousel";
export default function Homeupdate() {
  return (
    <div className='home-page-update'>
      <HomeGeroo />
      <NetworkSectionHome />
    
      <div className='cloud-home-sectoin'>
      <AISolutions />
      </div>
     
        <ServicesSection />

        <NewsCarousel />
    </div>
  )
}
