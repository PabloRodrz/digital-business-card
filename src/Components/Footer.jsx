import React from 'react'
import githubLogo from '../images/GitHub-Icon.png'
function Footer() {
  return(
    <div className='footer-container'>
     <a href="https://github.com/PabloRodrz" target="blank">
      <img src={githubLogo} alt="github-logo">
         </img> 
      </a> 
    </div>
  )
}

export default Footer