import React from 'react';
import './About.css';
import { useParams } from 'react-router-dom';

const About = () => {

    const { id } = useParams();

  return (
    <div className='about'>
      <h1>About</h1>
      {id && <h1>Parameter: {id}</h1>}
    </div>
  )
}

export default About