import React from 'react';
import logo from '../public/logo-ebazar.png'


const Footer = () => {
  return (
    <footer>
      <div className="footer-section-1">
        <img src={logo} alt="Logo" style={{ width:"150px", 
            height:"80px"}}/>
        <p style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet  <br />nulla auctor, vestibulum magna sed, convallis ex.</p>
      </div>
      <div className="footer-section-2">
        <nav className='footerlinks'>
          <ul>
            <li><a href="#" style={{color:'#360125',fontSize:'20px'}}>Home</a></li>
            <li><a href="/about" style={{color:'#360125',fontSize:'20px'}}>About</a></li>
            <li><a href="/products" style={{color:'#360125',fontSize:'20px'}}>Products</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
