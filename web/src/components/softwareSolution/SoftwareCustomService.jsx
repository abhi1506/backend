import React from 'react'
import './SoftwareCustomService.css'

const SoftwareCustomService = () => {
  const data = [
    {
      id: 1,
      header: "AI-Powered Business Solutions"
    },
    {
      id: 2,
      header: "Cloud-Based Productivity Tools"
    },
    {
      id: 3,
      header: "Enterprise Software Integration"
    },
    {
      id: 4,
      header: "Cybersecurity & Compliance"
    }
  ];
  
  return (

  <div className='soft-custom-service-container'>
  
    <div className='soft-custom-card-left'>
      <div className='cms-feature-left-content'>  
      <h1 className='soft-custom-heading'>Custom Software Development Services </h1>
      <p className='soft-custom-subtile'>We build tailored software solutions to meet your unique business needs, delivering the highest growth potential</p>
      </div>
    </div>
    <div className='soft-custom-card-right'>
      <div className='soft-custom-card-container'>
        {
          data.map((data) => {
            return(
              <div key={data.id} className='soft-custom-card'>
                <h3 className='softt-custom-card-header'>{data.header}</h3>
              </div>
            )
          })
        }
         
      </div>
    </div>

  </div>

  );
};

export default SoftwareCustomService;
