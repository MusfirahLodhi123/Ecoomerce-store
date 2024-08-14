import React from 'react';
import NavbarComp from './Navbar';
import Footer from './Footer';
import Products from './Products';

const Home = () => {

  return (

  <>
      
          <div className="full-background">
          <NavbarComp />
      <div className="cont">
        <h1>Shop Our Latest Collection</h1>
        <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, libero. <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus iste ratione eligendi fuga suscipit error.
        </p>
        <button>Shop Now</button>
      </div>
      </div> 
     <Products/>
      <Footer/>
  </>
    
  );
}

export default Home;
