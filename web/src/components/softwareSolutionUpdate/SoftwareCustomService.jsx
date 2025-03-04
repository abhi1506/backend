import React from 'react'
import './SoftwareCustomService.css'
import {FadeInFromLeft, FadeInDown} from '../animation/animation'
// import PropTypes from "prop-types"

const SoftwareCustomService = () => {
  const data=[
    {
      id:1,
      header:"Product Engineering "
    },
    {
      id:2,
      header:"Enterprise Services"
    },
    {
      id:3,
      header:"Digital Transformation Services"
    },
    {
      id:4,
      header:"Startup Software Solutions & Services"
    }
  ]
  return (

  <div className='soft-custom-service-container'>
  
    <div className='soft-custom-card-left'>
      <FadeInFromLeft className='cms-feature-left-content'>  
      <h1 className='soft-custom-heading'>What we do </h1>
      <p className='soft-custom-subtile'>Transform your vision into a market-ready, scalable software solution with our expert custom development, UX/UI, and MVP services.







</p>
      </FadeInFromLeft>
    </div>
    <div className='soft-custom-card-right'>
      <div className='soft-custom-card-container'>
        {
          data.map((data) => {
            return(
              <FadeInDown key={data.id} className='soft-custom-card'>
                <h3 className='softt-custom-card-header'>{data.header}</h3>
              </FadeInDown>
            )
          })
        }
         
      </div>
    </div>

  </div>

  );
};

export default SoftwareCustomService;
