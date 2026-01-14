import React from 'react'
import './Experiences.css'
import Experiences_Data from '../../assets/experiences_data'


const Experiences = () => {
  return (
    <div id='experiences' className='experiences'>
      <div className="experiences-title">
        <h1>My Experiences</h1>
      </div>

      <div className="experiences-container">
        {Experiences_Data.map((experience, index) => {
          return (
            <div key={index} className='experiences-format'>
              <h3>{experience.e_no}</h3>
              <h2>{experience.e_name}</h2>
              <p>{experience.e_desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experiences
