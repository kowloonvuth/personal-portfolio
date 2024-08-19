import React from 'react';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Github from '@mui/icons-material/GitHub';
import '../styles/Footer.css';


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <LinkedIn />
          <Github />
          <Facebook />
        </div>
      <p> &Copy: 2024 virakvuthportfolio.com</p>
    </div>
  )
}

export default Footer
