import React from 'react';
import foto from '../images/foto-cv.png';
import linkedinLogo from '../images/linkedin.png'
import emailLogo from '../images/Mail.png'
function Info() {
  return (
    <div className="info-container">
      <header>
        <img src={foto} alt="myphoto" className='photo' />
      </header>
      <h2>Pablo Rodriguez</h2>
      <h4>Trainee frontend developer</h4>
      <button
        type='email'
        className='email-btn'>
        <img src={emailLogo} alt='email-logo' className='img-btn'></img> 
        <a href="mailto:pablorodz9@hotmail.com">Email</a>
      </button>
      <button className='linkedin-btn'>
        <img src={linkedinLogo} alt="linkedin-logo" className='img-btn' />
        <a href="https://www.linkedin.com/in/pablo-rodriguez-00a038210/" target="_blank">Linkedin</a>
      </button>
    </div>
  )
}

export default Info