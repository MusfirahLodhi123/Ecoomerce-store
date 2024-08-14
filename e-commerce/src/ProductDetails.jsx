import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
    };

    fetchProductDetails();
  }, [id]);

  if (!product) return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center'
    }}>
      <Spinner animation="border" />
    </div>
  );

  return (
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '400px',
      textAlign: 'center',
      margin: 'auto'
    }}>
      <h1>Product Info</h1> <br /> <br />
      <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto' }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
    
    </div>
  );
};

export default ProductDetails;
