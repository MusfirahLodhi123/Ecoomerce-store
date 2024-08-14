import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching the products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
     
      <h1 style={{ textAlign: 'center', color: '#9B3464' }}>All Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product) => (
          <div key={product.id} style={{ margin: '20px' }}>
            <Cards 
              title={product.title} 
              description={product.description} 
              image={product.image} 
              id={product.id} 
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
